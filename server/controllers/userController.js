const UserRepo = require("../repositories/userRepo");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJwt = (id, login, isAdmin) => {
  return jwt.sign({ id, login, isAdmin }, process.env.SECRET_KEY, {
    expiresIn: "96h",
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password, name } = req.body;
      if (!login || !password || !name)
        return next(ApiError.badRequest("Некорректный login или password"));
      const candidate = await UserRepo.findUserByLogin({ login });
      if (candidate)
        return next(ApiError.badRequest("Пользователь уже существует"));
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await UserRepo.createUser({
        login,
        password: hashPassword,
        name,
      });
      const token = generateJwt(user.id, user.login, user.isAdmin);
      return res.json(token);
      // return res.status(200).json(user);
    } catch (e) {
      res.json(e.message);
    }
  }
  async login(req, res, next) {
    const { login, password } = req.body;
    const user = await UserRepo.findUserByLogin({ login });
    if (!user) return next(ApiError.internal("Пользователь не найден"));
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword)
      return next(ApiError.internal("Указан неверный пароль"));
    const token = generateJwt(user.id, user.login, user.isAdmin);
    return res.json(token);
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.login, req.user.isAdmin);
    return res.json(token);
  }
}

module.exports = new UserController();

const UserRepo = require("../repositories/userRepo");
const ApiError = require("../error/ApiError");

class UserController {
  async createUser(req, res, next) {
    try {
      const user = await UserRepo.addUser(
        req.query.login,
        req.query.password,
        req.query.name
      );
      return res.status(200).json(user);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();

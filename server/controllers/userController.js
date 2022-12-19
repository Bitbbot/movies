const UserRepo = require("../repositories/userRepo");
const ActorRepo = require("../repositories/actorRepo");
const AuditionRepo = require("../repositories/auditionRepo");
const TopicRepo = require("../repositories/topicRepo");
const GroupRepo = require("../repositories/groupRepo");
const JobRepo = require("../repositories/jobRepo");

const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const PDFGenerator = require("pdfkit");
const fs = require("fs");

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
  async report(req, res, next) {
    const users = await UserRepo.count();
    const actors = await ActorRepo.count();
    const jobs = await JobRepo.count();
    const auditions = await AuditionRepo.count();
    const topics = await TopicRepo.count();
    const groups = await GroupRepo.count();
    let theOutput = new PDFGenerator();
    theOutput.pipe(fs.createWriteStream("TestDocument.pdf"));
    theOutput.text("User activity report", {
      bold: true,
      align: "center",
    });
    theOutput.text("24.02.2023 14:56", {
      bold: true,
      underline: true,
      align: "center",
    });
    theOutput.moveDown();
    theOutput.text(`Users: ${users}`, {
      bold: true,
      align: "center",
    });
    theOutput.text(`Actors: ${actors}`, {
      bold: true,
      align: "center",
    });
    theOutput.text(`Auditions: ${auditions}`, {
      bold: true,
      align: "center",
    });
    theOutput.text(`Jobs: ${jobs}`, {
      bold: true,
      align: "center",
    });
    theOutput.text(`Film crew: ${groups}`, {
      bold: true,
      align: "center",
    });
    theOutput.text(`Topics: ${topics}`, {
      bold: true,
      align: "center",
    });

    theOutput.end();
    // return res.json({ mes: "okay" });
    return res.sendFile("TestDocument.pdf", {
      root: "D:\\STUDIES\\7sem\\курсач\\movies\\server",
    });
  }
}

module.exports = new UserController();

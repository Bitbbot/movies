const { UserModel } = require("../models/models");

class UserRepo {
  async createUser({ login, password, name }) {
    return await UserModel.create({
      login: login,
      password: password,
      name: name,
      isAdmin: false,
    });
  }
  async findUserByLogin({ login }) {
    return await UserModel.findOne({ where: { login } });
  }
  async findUserByLoginPassword({ login, password }) {
    return await UserModel.findOne({ where: { login, password } });
  }

  async updateImg({ id, img }) {
    return await UserModel.update({ img: img }, { where: { id: id } });
  }
}

module.exports = new UserRepo();

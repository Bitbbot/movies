const { UserModel } = require("../models/models");

class UserRepo {
  async addUser(login, password, name) {
    return await UserModel.create({
      login: login,
      password: password,
      name: name,
      isAdmin: false,
    });
  }
  async checkUser(login, password) {
    await UserModel.findOne({ where: { login, password } });
  }
  async updateImg(id, img) {
    await UserModel.update({ img: img }, { where: { id: id } });
  }
}

module.exports = new UserRepo();

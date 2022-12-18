const { GroupModel } = require("../models/models");

class GroupRepo {
  async getGroups() {
    return await GroupModel.findAll();
  }
  async createGroup({ id, type, text, img }) {
    return await GroupModel.create({
      userId: id,
      type,
      text,
      img,
    });
  }
}

module.exports = new GroupRepo();

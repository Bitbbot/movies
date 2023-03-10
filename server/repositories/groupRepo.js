const { GroupModel } = require("../models/models");

class GroupRepo {
  async getGroups() {
    return await GroupModel.findAll({
      attributes: ["type", "text", "img"],
    });
  }
  async createGroup({ id, type, text, img }) {
    return await GroupModel.create({
      userId: id,
      type,
      text,
      img,
    });
  }
  async count() {
    return await GroupModel.count();
  }
}

module.exports = new GroupRepo();

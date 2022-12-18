const { TopicsModel } = require("../models/models");

class TopicsRepo {
  async getTopics() {
    return await TopicsModel.findAll();
  }
  async createTopics({ id, text, img }) {
    return await TopicsModel.create({
      userId: id,
      text,
      img,
    });
  }
}

module.exports = new TopicsRepo();

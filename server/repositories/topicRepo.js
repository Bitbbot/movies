const { TopicModel } = require("../models/models");

class TopicsRepo {
  async getTopics() {
    return await TopicModel.findAll({
      attributes: ["text", "img"],
    });
  }
  async createTopics({ id, text, img }) {
    return await TopicModel.create({
      userId: id,
      text,
      img,
    });
  }
}

module.exports = new TopicsRepo();

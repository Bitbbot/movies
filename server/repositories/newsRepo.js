const { NewsModel } = require("../models/models");

class NewsRepo {
  async getNews() {
    return await NewsModel.findAll({
      attributes: ["text", "img"],
    });
  }
  async createNews({ id, text, img }) {
    return await NewsModel.create({
      userId: id,
      text,
      img,
    });
  }
}

module.exports = new NewsRepo();

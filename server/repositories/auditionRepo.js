const { AuditionModel } = require("../models/models");

class AuditionRepo {
  async getAuditions() {
    return await AuditionModel.findAll({
      attributes: ["sex", "type", "age", "height", "text", "img"],
    });
  }
  async createAudition({ id, type, sex, age, height, text, img }) {
    return await AuditionModel.create({
      userId: id,
      type,
      sex,
      age,
      height,
      text,
      img,
    });
  }
}

module.exports = new AuditionRepo();

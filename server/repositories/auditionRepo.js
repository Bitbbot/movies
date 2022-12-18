const { AuditionModel } = require("../models/models");

class AuditionRepo {
  async getAuditions() {
    return await AuditionModel.findAll();
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

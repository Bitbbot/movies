const { ActorModel } = require("../models/models");

class ActorRepo {
  async getActors() {
    return await ActorModel.findAll({
      attributes: ["sex", "age", "height", "text", "img"],
    });
  }
  async createActor({ id, sex, age, height, text, img }) {
    return await ActorModel.create({
      userId: id,
      sex,
      age,
      height,
      text,
      img,
    });
  }
  async count() {
    return await ActorModel.count();
  }
}

module.exports = new ActorRepo();

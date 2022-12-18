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
}

module.exports = new ActorRepo();

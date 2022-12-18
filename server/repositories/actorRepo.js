const { ActorModel } = require("../models/models");

class ActorRepo {
  async getActors() {
    return await ActorModel.findAll();
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

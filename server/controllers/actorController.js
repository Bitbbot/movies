const ActorRepo = require("../repositories/actorRepo");
const ApiError = require("../error/ApiError");

class ActorController {
  async getActors(req, res, next) {
    try {
      const actors = await ActorRepo.getActors();
      return res.status(200).json(actors);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createActor(req, res, next) {
    try {
      const { sex, age, height, text, img } = req.body;
      const actor = await ActorRepo.createActor({
        id: req.user.id,
        sex,
        age,
        height,
        text,
        img,
      });
      return res.status(200).json(actor);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ActorController();

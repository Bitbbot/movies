const AuditionRepo = require("../repositories/auditionRepo");
const ApiError = require("../error/ApiError");

class AuditionController {
  async getAuditions(req, res, next) {
    try {
      const auditions = await AuditionRepo.getAuditions();
      return res.status(200).json(auditions);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createAudition(req, res, next) {
    try {
      const { type, sex, age, height, text, img } = req.body;
      const audition = await AuditionRepo.createAudition({
        id: req.user.id,
        type,
        sex,
        age,
        height,
        text,
        img,
      });
      return res.status(200).json(audition);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new AuditionController();

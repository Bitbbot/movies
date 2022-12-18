const GroupRepo = require("../repositories/groupRepo");
const ApiError = require("../error/ApiError");

class GroupController {
  async getGroups(req, res, next) {
    try {
      const groups = await GroupRepo.getGroups();
      return res.status(200).json(groups);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createGroup(req, res, next) {
    try {
      const { type, text, img } = req.body;
      const group = await GroupRepo.createGroup({
        id: req.user.id,
        type,
        text,
        img,
      });
      return res.status(200).json(group);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new GroupController();

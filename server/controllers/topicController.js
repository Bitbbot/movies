const TopicRepo = require("../repositories/topicRepo");
const ApiError = require("../error/ApiError");

class TopicController {
  async getTopics(req, res, next) {
    try {
      const topics = await TopicRepo.getTopics();
      return res.status(200).json(topics);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createTopic(req, res, next) {
    try {
      const { text, img } = req.body;
      const topic = await TopicRepo.createTopics({
        id: req.user.id,
        text,
        img,
      });
      return res.status(200).json(topic);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new TopicController();

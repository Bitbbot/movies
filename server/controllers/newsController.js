const NewsRepo = require("../repositories/newsRepo");
const ApiError = require("../error/ApiError");

class NewsController {
  async getNews(req, res, next) {
    try {
      const news = await NewsRepo.getNews();
      return res.status(200).json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createNews(req, res, next) {
    try {
      const { text, img } = req.body;
      const news = await NewsRepo.createNews({
        id: req.user.id,
        text,
        img,
      });
      return res.status(200).json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new NewsController();

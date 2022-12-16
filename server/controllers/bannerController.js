const BannerRepo = require("../repositories/bannerRepo");
const ApiError = require("../error/ApiError");

class BannerController {
  async createBanner(req, res, next) {
    try {
      const { userId, text, price } = req.body;
      const banner = await BannerRepo.createBanner(userId, text, price);
      res.status(200).json(banner);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  // async getBest(req, res, next) {
  //   try {
  //     const banner = await BannerRepo.getBestBanner();
  //     return res.json(banner);
  //   } catch (e) {
  //     next(ApiError.badRequest(e.message));
  //   }
  // }
}

module.exports = new BannerController();

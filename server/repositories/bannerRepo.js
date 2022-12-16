const { BannerModel } = require("../models/models");
const sequelize = require("sequelize");

class BannerRepo {
  async getBanners() {
    await BannerModel.findAll();
  }
  async createBanner(userId, text, price) {
    return await BannerModel.create({
      userId,
      text,
      price,
      views: 0,
      clicks: 0,
    });
  }
  // async getBestPrice() {
  //   return await BannerModel.findOne({
  //     attributes: [[sequelize.fn("max", sequelize.col("price"))]],
  //   });
  // }
}

module.exports = new BannerRepo();

const { JobModel } = require("../models/models");

class JobRepo {
  async getJobs() {
    return await JobModel.findAll({
      attributes: ["type", "text", "img"],
    });
  }
  async createJob({ id, type, text, img }) {
    return await JobModel.create({
      userId: id,
      type,
      text,
      img,
    });
  }
}

module.exports = new JobRepo();

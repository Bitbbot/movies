const { JobModel } = require("../models/models");

class JobRepo {
  async getJobs() {
    return await JobModel.findAll();
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

const JobRepo = require("../repositories/jobRepo");
const ApiError = require("../error/ApiError");

class JobController {
  async getJobs(req, res, next) {
    try {
      const jobs = await JobRepo.getJobs();
      return res.status(200).json(jobs);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createJob(req, res, next) {
    try {
      const { type, text, img } = req.body;
      const job = await JobRepo.createJob({
        id: req.user.id,
        type,
        text,
        img,
      });
      return res.status(200).json(job);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new JobController();

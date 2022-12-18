const Router = require("express");
const JobsController = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, JobsController.createJob);
router.get("/all", JobsController.getJobs);
module.exports = router;

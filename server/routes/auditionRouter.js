const Router = require("express");
const AuditionController = require("../controllers/auditionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, AuditionController.createAudition);
router.get("/all", AuditionController.getAuditions);
module.exports = router;

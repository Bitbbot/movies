const Router = require("express");
const BannerController = require("../controllers/bannerController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/add", checkRole(true), BannerController.createBanner);
router.get("/all");
router.get("/best");

module.exports = router;

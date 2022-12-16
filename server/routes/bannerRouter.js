const Router = require("express");
const BannerController = require("../controllers/bannerController");
const router = new Router();

router.post("/add", BannerController.createBanner);
router.get("/all");
router.get("/best", BannerController.getBest);

module.exports = router;

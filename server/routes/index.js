const Router = require("express");
const router = new Router();
const authRouter = require("./userRouter");
const bannerRouter = require("./bannerRouter");

router.use("/user", authRouter);
router.use("/banner", bannerRouter);

module.exports = router;

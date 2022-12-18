const Router = require("express");
const router = new Router();
const authRouter = require("./userRouter");
const bannerRouter = require("./bannerRouter");
const actorRouter = require("./actorRouter");
const newsRouter = require("./newsRouter");
const jobRouter = require("./jobRouter");
const groupRouter = require("./groupRouter");
const auditionRouter = require("./auditionRouter");
const topicRouter = require("./topicRouter");

router.use("/user", authRouter);
router.use("/banner", bannerRouter);
router.use("/actor", actorRouter);
router.use("/audition", auditionRouter);
router.use("/news", newsRouter);
router.use("/job", jobRouter);
router.use("/group", groupRouter);
router.use("/topic", topicRouter);

module.exports = router;

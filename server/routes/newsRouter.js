const Router = require("express");
const NewsController = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, NewsController.createNews);
router.get("/all", NewsController.getNews);
module.exports = router;

const Router = require("express");
const TopicController = require("../controllers/topicController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, TopicController.createTopic);
router.get("/all", TopicController.getTopics);
module.exports = router;

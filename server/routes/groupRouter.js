const Router = require("express");
const GroupController = require("../controllers/groupController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, GroupController.createGroup);
router.get("/all", GroupController.getGroups);
module.exports = router;

const Router = require("express");
const ActorController = require("../controllers/actorController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/create", authMiddleware, ActorController.createActor);
router.get("/all", ActorController.getActors);
module.exports = router;

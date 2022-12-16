const Router = require("express");
const UserController = require("../controllers/userController");
const router = new Router();

router.post("/registration", UserController.createUser);
router.post("/login");
router.get("/auth");

module.exports = router;

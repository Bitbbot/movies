const Router = require("express");
const UserController = require("../controllers/userController");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", authMiddleware, UserController.check);
router.get("/report", checkRole(true), UserController.report);
module.exports = router;

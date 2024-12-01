const express = require("express");
const { getAllRoles } = require("../controllers/roleController");
const { authMiddleware, roleMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, roleMiddleware(["Admin"]), getAllRoles);

module.exports = router;

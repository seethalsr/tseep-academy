const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// @route   POST /api/auth/register
router.get("/register", registerUser);

// @route   POST /api/auth/login
// router.post("/login", loginUser);

// export default router;
module.exports = router;

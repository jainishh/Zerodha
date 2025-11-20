const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");
const {
  signUpValidation,
  loginValidation,
} = require("../Middleware/AuthValidation");

router.post("/signup", signUpValidation, Signup);
router.post("/login", loginValidation, Login);

module.exports = router;

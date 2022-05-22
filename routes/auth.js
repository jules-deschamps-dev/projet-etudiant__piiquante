const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/auth");
const password = require("../middleware/password");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;

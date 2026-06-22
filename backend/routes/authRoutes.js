const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "Auth Route Working",
  });
});

router.post("/register", async (req, res) => {
  
});

module.exports = router;
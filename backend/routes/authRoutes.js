const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

// Testing Route
router.get("/test", (req, res) => {
  res.json({
    message: "Auth Route Working",
  });
});

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
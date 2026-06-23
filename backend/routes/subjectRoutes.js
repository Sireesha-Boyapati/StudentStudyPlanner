const express = require("express");
const Subject = require("../models/Subject");

const router = express.Router();

// Add a Subject
router.post("/", async (req, res) => {
  try {
    const { name, difficulty, studyHoursPerWeek } = req.body;

    const subject = new Subject({
      name,
      difficulty,
      studyHoursPerWeek,
    });

    await subject.save();

    res.status(201).json({
      message: "Subject added successfully",
      subject,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get All Subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();

    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
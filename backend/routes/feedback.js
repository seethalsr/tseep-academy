// import express from "express";
const express=require('express')
const Feedback=require('../models/Feedback.js')
// import Feedback from "../models/Feedback.js";
// import authenticateToken from "../middleware/auth.js";
const authenticateToken=require('../middleware/auth.js')

const router = express.Router();

router.post("/feedback",authenticateToken, async (req, res) => {
  try {
    const { score, rating,message } = req.body;
    const feedback = new Feedback({
      user: req.user.id,
      score,
      rating,
      message,
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (error) {
    console.error("Feedback error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports= router;

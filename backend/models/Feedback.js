const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  score: Number,
  rating: Number, // 1 to 5 (emoji rating)
});

module.exports = mongoose.model("Feedback", feedbackSchema);

const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  score: Number,
  rating: Number,
  message:String, 
});

module.exports = mongoose.model("Feedback", feedbackSchema);

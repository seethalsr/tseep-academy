// // backend/routes/feedback.js
// import express from "express";
// import Feedback from "../models/Feedback.js";
// import authenticateToken from "../middleware/auth.js";

// const router = express.Router();

// router.post("/", authenticateToken, async (req, res) => {
//   try {
//     const { score, rating } = req.body;

//     const feedback = new Feedback({
//       user: req.user.id,
//       score,
//       rating,
//     });

//     await feedback.save();
//     res.status(201).json({ message: "Feedback saved successfully" });
//   } catch (error) {
//     console.error("Feedback error:", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;

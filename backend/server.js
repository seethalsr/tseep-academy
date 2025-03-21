// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import registerRoutes from './routes/authRoutes.js'
// import testRoutes from './routes/testRoutes.js';
// import feedbackRoutes from './routes/feedback.js'; // ✅ use import
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose=require('mongoose')
const registerRoutes=require('./routes/authRoutes')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern_db", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(() => {
    console.log("✅ Connected to MongoDB");
  }).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Routes
// app.use('/api/test', testRoutes);
app.use('/api/auth/',registerRoutes)
// app.use("/api/feedback", feedbackRoutes); // ✅ this line is now fixed

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// require("dotenv").config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })


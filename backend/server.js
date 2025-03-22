const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose=require('mongoose')
const registerRoutes=require('./routes/authRoutes')
const feedbackRoutes = require('./routes/feedback')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern_db1", {
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
app.use('/api/',feedbackRoutes)
// app.use("/api/feedback", feedbackRoutes); // 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// require("dotenv").config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })


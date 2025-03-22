const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register user
exports.registerUser = async (req, res) => {
  const { fullName, email, mobile, role, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      mobile,
      role,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

// @desc Login user
exports.loginUser = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findOne({ mobile });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    console.log(token)
    res.status(200).json({
      message: "Login successful ✅",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        role: user.role,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

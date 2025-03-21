// // backend/middleware/auth.js
// import jwt from "jsonwebtoken";

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

//   if (!token) {
//     return res.status(401).json({ error: "Access denied. Token missing." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Add user payload to request
//     next(); // Pass control
//   } catch (err) {
//     return res.status(403).json({ error: "Invalid token." });
//   }
// };

// export default authenticateToken;

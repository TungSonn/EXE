const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const passport = require("passport");
require("./auth/auth");

//routes
const authRoutes = require("./route/auth");
const userRoutes = require("./route/userRoutes");
const vehicleRoutes = require("./route/vehicleRoutes");
const ownerRoutes = require("./route/ownerRoutes");
const adminRoutes = require("./route/adminRoutes");
const carRoutes = require("./route/carRoutes");

const app = express();

// Basic middleware setup
app.use(morgan("dev")); // Logging middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
const PORT = process.env.PORT || 4999;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "https://exe-aewq.onrender.com";
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);

// Root path handlers - place these before other routes
app.get("/", (req, res) => {
  console.log("GET / was called");
  res.status(200).json({ message: "Server is running" });
});

app.head("/", (req, res) => {
  console.log("HEAD / was called");
  res.status(200).end();
});

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/uploads/vehicles",
  express.static(path.join(__dirname, "uploads", "vehicles"))
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cars", carRoutes);

// Test route
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// Error handling middleware - should be last
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).json({ message: "Something broke!", error: err.message });
});

// 404 handler - should be after all routes but before error handler
app.use((req, res) => {
  console.log("404 Not Found:", req.method, req.url);
  res.status(404).json({ message: "Route not found" });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 10000,
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  retryWrites: true,
  w: 'majority'
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

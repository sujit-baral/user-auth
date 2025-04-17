const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); 
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://user-auth-crgt93yx9-sujit-barals-projects.vercel.app/', 
  credentials: true
}));




app.use(express.json());

// Routes
app.use("/api", authRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Connect db
connectDB();
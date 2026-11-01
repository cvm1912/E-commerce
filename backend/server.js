const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//imports 
const logger = require('./src/configs/loggerConfig');
const connectDatabase = require('./src/configs/dbConfig');

// Connect to database
connectDatabase();

// Initialize Express application
const app = express();

// Middleware configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
],
credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Uber Backend API"
    });
});



// Start Express server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server is running on port http://localhost:${PORT}`);
});

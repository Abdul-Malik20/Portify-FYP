const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/apiRoutes'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Use the routes from apiRoutes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} 🎉`);
});

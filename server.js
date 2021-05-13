const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); //allows us to use the environmental variables in the .env
const { PORT } = process.env

// Connect to db
connectDB();

// Initialize express
const app = express();

// Initialize Express middleware
app.use(express.json({ extended: false }));

// Create a basic express route
app.get('/', (req, res) => res.json({ message: 'CRUD App with Database' }));

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`server running on port ${port}`));


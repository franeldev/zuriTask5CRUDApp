const express = require('express');
const connectDB = require('./db/setup');
const route = require('./routes/dataRoute')
require('dotenv').config(); //allows us to use the environmental variables in the .env
const { PORT } = process.env
const app = express();

// Initialize Express middleware
app.use(express.json({ extended: false }));

// Initialize route middleware
app.use(route);

// Setup db || Connect to db
connectDB();

// Create a basic express route
app.get('/', (req, res) => res.json({ message: 'Welcoome to Zuri CRUD App payloads. Kindly visit the readme file to get the Endpoints/API but you can start with /users to read all data' }));

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`server running on port ${port}`));


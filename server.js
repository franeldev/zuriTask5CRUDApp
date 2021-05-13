const express = require('express');
const connectDB = require('./db');

// Connect to db
connectDB();

// Initialize express
const app = express();

// Initialize Express middleware
app.use(express.json({ extended: false }));

// Create a basic express route
app.get('/', (req, res) => res.json({ message: 'CRUD App with Database' }));


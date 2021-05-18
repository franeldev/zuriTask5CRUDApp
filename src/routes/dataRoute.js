const express = require('express');
const router = express.Router();
const dataCtrller = require('../controllers/dataController')

/**** We will be using a route to link CRUD request to the database ****/
/*
    ======= API ========
*/ 

// POST request to /user to create a new user
router.post('/users', dataCtrller.create);

// GET request from (/users) to fetch all users 
router.get('/users', dataCtrller.fetch);

// GET request to /userDatas/:id to fetch a single user
router.get('/users/:id', dataCtrller.fetchOne);

// PUT request to /users/:id to update a single user
router.put('/users/:id', dataCtrller.update);

// DELETE request to /users/:id to delete a single user
router.delete('/users/:id', dataCtrller.delete);

module.exports = router;



/* 
Model.find => fetch multiple documents
Model.findOne => fetch single documents
Model.findById => fetch single documents by ID

// To UPDATE we use;
Model.finOneAndUpdate
Model.findByIdAndUpdate
*/
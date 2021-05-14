const express = require('express');
const router = express.Router();
const DataCtrl = require('../controllers/dataController')

/**** We will be using a route to link CRUD request to the database ****/
// POST request to /userDatas to create a new userData
router.post('/userDatas', DataCtrl.createNewData);

// GET request to /userDatas to fetch all userDatas
router.get('/userDatas', DataCtrl.fetchData);

// GET request to /userDatas/:id to fetch a single userData
router.get('/userDatas/:id', DataCtrl.fetchSingleData);

// PUT request to /userDatas/:id to update a single userData
router.put('/userData/:id', DataCtrl.updateSingleData);

// DELETE request to /userDatas/:id to delete a single userData
router.delete('./userDatas/:id', DataCtrl.deleteSingleData);

module.exports = router;



/* 
Model.find => fetch multiple documents
Model.findOne => fetch single documents
Model.findById => fetch single documents by ID

// To UPDATE we use;
Model.finOneAndUpdate
Model.findByIdAndUpdate
*/
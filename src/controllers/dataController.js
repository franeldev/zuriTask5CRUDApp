// Setup schema
const UserData = require('../models/dataModel');

// dataController is the functions that handle the requests and responses extracted from dataRoute.js
exports.createNewData = (req, res) => { //  createUser
  // retrive new userData details from req.body
  UserData.create({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
  }, (err, newUserData) => {
    if (err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({ message: 'new userData created', newUserData })
    }
  })
}

exports.fetchData = (req, res) => { //  getUsers
  // Fetch all useDatas
  UserData.find({}, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({ userData })
    }
  })
  // Send response to client
}

exports.fetchSingleData = (req, res) => {   //  getUser
  UserData.findOne({ _id: req.params.id }, (err, userData) => {
    if (!userData) {
      return res.status(404).json({ message: "userData not found" })
    }  
    else if (err) {
      return res.status(500).json({ message: err })
    } 
    else  {
      return res.status(200).json({ userData })
    }
  })
}

exports.updateSingleData = (req, res) => {  //  updateUser
  UserData.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
  }, (err, userData) => {
    if (!userData) {
      return res.status(404).json({ message: "userData not found" })
    }
    else if (err) {
      return res.status(500).json({ message: err })
    } 
    else {
      userData.save((err, savedUserData) => {
        if (savedUserData) {
          return res.status(200).json({ message: 'userData updated successfully' })
        }
        else {
          return res.status(400).json({ message: err })
        } 
      });
    }
  })
}

exports.deleteSingleData = (req, res) => {    //  deleteUser
  UserData.findByIdAndDelete(req.params.id, (err, userData) => {
    if(err) {
      return res.status(500).json({ message: err })
    }
    else if (!userData) {
      return res.status(404).json({ message: "data was not found" })
    }
    else {
      return res.status(200).json({ message: "data deleted successfully" })
    }
  })
}
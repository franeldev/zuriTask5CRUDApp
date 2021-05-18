// Setup schema
const Userdb = require('../models/dataModel');

/* 
  ==** dataController is the functions that handle the requests and responses extracted from dataRoute.js **==
*/

// create and save new user
exports.create = (req, res) => {
  // validate request
  // create a instance new Userdb from the Schema and store it in the user variable
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
  })

  // save user in the database
  user
  .save(user)
  .then(data => {
    res.status(201).json({ message: 'new data created', data })
  })
  // if the above promise return an error then catch it with the catch method
  .catch(err => {
    res.status(500).json({
      message: err.message || "Some error occurred while creating a create operation"
    })
  });

}

// retrieve and return all users 
exports.fetch = (req, res) => {
  // Fetch all Data
  Userdb.find({}, (err, data) => {
    if (err) {
      return res.status(404).json({ messsage: err })
    } else {
      return res.status(200).json({ data })
    }
  });
  
}

// retrieve and return a single user
exports.fetchOne = (req, res) => {  
  Userdb.findOne({ _id: req.params.id }, (err, data) => {
    if (!data) {
      return res.status(404).json({ message: "data not found" })
    }  
    else if (err) {
      return res.status(500).json({ message: err })
    } 
    else  {
      return res.status(200).json({ data })
    }
  })
}


// Update a new identified user by user id
exports.update = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
  .then(data => {
    return res.status(200).json({ message: 'data updated successfully', data })
  })
  .catch(err => {
    res.status(404).json({ message: `data with id '${id}' was not found!` })
  })
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
  .then((data, err) => {
    if(!data) {
      res.status(500).json({
        message: err
      })
    } else {
      res.json({
        message: `data with id '${id}' was deleted successfully!`
      })
    }
  })
  .catch(err => {
    res.status(404).json({ 
      message: `data with id '${id}' was not found!` 
    })
  })
}
/**----------------------- 
 * 1. Create a connection function for mongodb
 * 2. Start a local mongo server connection
-------------------------**/
// Setup Mongoose
const mongoose = require('mongoose');
require('dotenv').config();
const { connectionString, MONGO_LOCAL_URI } = process.env;

// Async/Await mongoose connection
const connectDB = async () => {
  try {
    await mongoose.connect(connectionString || MONGO_LOCAL_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Database connection successful...');
  } catch (err) {
    console.log(err.message);
    
    // Exit with failure
    process.exit(1);
  }
}

// OR Create the connection function using the normal arrow function with .then method
// const connectDB  = () => {
//   mongoose.connect(MONGO_LOCAL_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log('MongoDB connected...');
//   })
//   .catch((err) => {
//     console.log(err.message);

//     // Exit with failure
//     process.exit(1);
//   })
// }

module.exports = connectDB;
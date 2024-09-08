const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      ssl: true,
      // Add SSL configuration
    });
    console.log("database connection established");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;

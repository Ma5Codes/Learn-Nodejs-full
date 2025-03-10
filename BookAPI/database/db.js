const mongoose = require("mongoose");
const MONGO_URI  = process.env.MONGODB_URI;


const connectToDB = async () => {
  try {
    await mongoose.connect( MONGO_URI);
    console.log("mongodb is connected successfully !");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;

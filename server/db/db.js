const mongoose = require("mongoose");
const { mongoUri } = require("../config/cfg");

module.exports = async function connectToDb() {
  try {
    return mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (e) {
    console.log("Error while attempting to connect to MongoDB");
  }
};

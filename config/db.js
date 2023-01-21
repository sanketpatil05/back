const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connection = mongoose.connect(
  "mongodb+srv://sanket:sanket1234@atlascluster.mfuwxew.mongodb.net/test"
);

module.exports = { connection };
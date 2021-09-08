const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("2/2 Conectado a Mongo");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

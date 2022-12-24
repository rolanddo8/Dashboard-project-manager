const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `Connecting to MongoDB: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;

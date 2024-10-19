import mongoose from "mongoose";

// This gets MONGO_URL from .env
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/digital-garden";

const db = mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Successfully connected to MongoDB at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
  });

export default await db;

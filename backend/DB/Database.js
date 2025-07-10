import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  const db = "mongodb://localhost:27017/finance-tracker";
  // is above proper connection string for local MongoDB?
  // If you are using MongoDB Atlas, replace it with your connection string
  //compass

  const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);
};

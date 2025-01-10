import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

export async function connectDB(){
  try {
    const connection=await mongoose.connect(MONGODB_URI);
    return connection;
  } catch (error) {
      console.error(error);
  }
}
import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const con = "mongodb://localhost:27017/tms_feb_2024"
    mongoose
    .connect(process.env.MONGO_URL);
    con && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

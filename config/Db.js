import mongoose from "mongoose";
// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGO_URI);

const connDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    console.log("mongoDb connected sucsfully...");
  } catch (error) {
    console.log("db connection error -> ", error);
  }
};
export default connDb;

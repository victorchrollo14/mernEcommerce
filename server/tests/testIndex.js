import express from "express";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MONGODB_URI } from "../config.js";

const testApp = express();
testApp.use(express.json());

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI);
};

const disconnectDB = async () => {
  await mongoose.connection.close();
};

let mongod;

const connectTestDB = async () => {
  mongod = await MongoMemoryServer.create();
  const URI = mongod.getUri();
  await mongoose.connect(URI);
  console.log("connected to in memory database");
};

const disConnTestDB = async () => {
  await mongoose.disconnect();
  await mongod.stop();
};

export { connectDB, disconnectDB, connectTestDB, disConnTestDB, testApp };

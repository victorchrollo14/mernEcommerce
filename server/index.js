import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.use(express.json())

app.get("/", (req, res) => {
  res.send("ok");
});

const runServer = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

runServer();

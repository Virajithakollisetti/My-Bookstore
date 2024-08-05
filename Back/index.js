import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.port || 4000;
const URL=process.env.MongoURL

try {
   mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
   });
   console.log("Connected to mongoDB")
} catch (error) {
  console.log("error",error);
}

app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
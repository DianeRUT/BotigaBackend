import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import mainRouter from "./routes/indexRouting.js";
dotenv.config();
const port=process.env.PORT ||3000
const db_user=process.env.DB_USER;
const db_pass=process.env.DB_PASS;
const db_name=process.env.DB_NAME;

const app = express();
app.use(bodyParser.json());

app.use("/", mainRouter)

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.hi77v.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });

// const PORT=5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import doneRouter from "./routes/done";
import inProgress from "./routes/progress";

dotenv.config();

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Atlas connection established")
});

app.use("/done", doneRouter);
app.use("/", inProgress);

app.listen(port, () =>{
    console.log(`Server is running on PORT ${port}`);
    console.log(process.env.ATLAS_URI);
});

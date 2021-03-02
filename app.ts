import cors from "cors";
import dotenv from "dotenv"
import express from "express";

dotenv.config();

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());


// const doneRouter = require ('./route/done');

// app.use('/done', doneRouter);

app.listen(port, () =>{
    console.log(`Server is running on PORT ${port}`);
});

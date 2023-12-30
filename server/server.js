import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/DB.js";


dotenv.config();
connectDB();

const app = express()

const PORT = process.env.PORT || 4000

app.listen(4000,()=> console.log(`Server started at http://localhost:${PORT}`));


import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/DB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js"


dotenv.config();
connectDB();

const app = express()

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use("/api/users",userRoutes);

app.listen(4000,()=> console.log(`Server started at http://localhost:${PORT}`));


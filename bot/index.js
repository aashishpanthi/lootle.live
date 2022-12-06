import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

//Connect database
connectDB();

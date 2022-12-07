//import dependencies
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import runBot from "./utils/bot.js";

dotenv.config();

//Connect database
connectDB();

// run bot
runBot();

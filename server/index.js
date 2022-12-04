//import dependencies
import express from "express";
import dotenv from "dotenv";

//making instance
const app = express();
dotenv.config();

//Server listening to port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

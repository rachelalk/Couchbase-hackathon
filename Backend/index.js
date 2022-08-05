import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import fires from "./routes/fires.js";

const app = express(); // initialise the express application
const port = 3001; // TODO : move it to env/config file

app.use(cors());
app.use(bodyParser.json()); // tells system we need to use json in api

// app.use("/", fires);

console.log(process.env);

app.use("/", fires);

app.listen(port, () => {
  console.log(`Server running on Port ${port} ...`);
}); // called it a 'function listener'

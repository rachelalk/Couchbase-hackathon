import { Collection } from "couchbase";
import express from "express";
import { findFires } from "../repository/firesRepository.js";
import { couchbaseConnect } from "../repository/cbManager.js";

const router = express.Router();

// Get all

router.post("/fires", async function (req, res) {
  const cluster = await couchbaseConnect();
  const bucket = cluster.bucket(process.env.bucketName);
  const defaultCollection = bucket.defaultCollection();

  let timestamp = new Date().getTime();
  let document = req.body;

  console.log(document);
  console.log(timestamp);

  const result = await defaultCollection.insert(timestamp, document);
  console.log(result);
  res.json({ success: true, message: `we got the fire report teehee` });
});

router.get("/fires", async function (req, res) {
  const fires = await findFires();
  res.send(fires);
});

export default router;
// example post
// post
// get data from front to here as a json object
// profit
// need to do the model for the data we're doing to send
// turn into string to use as document id for our fresh ids for the database
// put that data inside couchbase
/*
// Create a hotel 
router.post('/hotel/:hotelId', (req, res) => {
    const hotelId = req.params.hotelId;
    const newHotel = req.body;
    res.send(`This API should create a new hotel document with id ${hotelId}`);
});

CORS BLAH
*/

//unambiguous timeouts - query taking too long OR the way we're connecting isnt right

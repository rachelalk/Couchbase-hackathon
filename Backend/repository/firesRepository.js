import couchbase from "couchbase";
import { couchbaseConnect } from "./cbManager.js";

export async function findFires() {
  const cluster = await couchbaseConnect();
  const query = `SELECT * FROM \`fire-report-bucket\`;`;

  try {
    let result = await cluster.query(query);
    console.log("Result: ", result);
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

import couchbase from "couchbase";

export async function couchbaseConnect() {
  return couchbase.connect(process.env.clusterConnStr, {
    username: process.env.username,
    password: process.env.password,
  }); // Move credentials to config file & remove ssl=no_verify for production
}

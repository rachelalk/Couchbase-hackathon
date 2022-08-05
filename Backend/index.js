var couchbase = require("couchbase");
require("dotenv").config();

async function main() {
	const clusterConnStr = process.env.clusterConnStr;
	const username = process.env.username;
	const password = process.env.password;
	const bucketName = process.env.bucketName;

	const cluster = await couchbase.connect(clusterConnStr, {
		username: username,
		password: password,
		timeouts: {
			kvTimeout: 10000, // milliseconds
		},
	});

	const bucket = cluster.bucket(bucketName);

	// Get a reference to the default collection, required only for older Couchbase server versions
	const defaultCollection = bucket.defaultCollection();

	// 	const collection = bucket.scope("tenant_agent_00").collection("users");

	// 	const user = {
	// 		type: "user",
	// 		name: "Michael",
	// 		email: "michael123@test.com",
	// 		interests: ["Swimming", "Rowing"],
	// 	};

	// 	// Create and store a document
	// 	await collection.upsert("michael123", user);

	// 	// Load the Document and print it
	// 	// Prints Content and Metadata of the stored Document
	// 	let getResult = await collection.get("michael123");
	// 	console.log("Get Result: ", getResult);

	// 	// Perform a N1QL Query
	// 	const queryResult = await bucket
	// 		.scope("tenant_agent_00")
	// 		.query("SELECT name FROM `users` WHERE $1 in interests", {
	// 			parameters: ["Swimming"],
	// 		});
	// 	console.log("Query Results:");
	// 	queryResult.rows.forEach((row) => {
	// 		console.log(row);
	// 	});
}

// Run the main function
main()
	.catch((err) => {
		console.log("ERR:", err);
		process.exit(1);
	})
	.then(process.exit);

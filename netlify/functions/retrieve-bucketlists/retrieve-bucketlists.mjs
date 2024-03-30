const { MongoClient } = require("mongodb");

// Create a new MongoClient
const mongoClient = new MongoClient(process.env.MONGODB_URI);

// Create a connection promise that can be reused across function invocations
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        // Await the connection promise
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        // Get the collection
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        // Perform the query and limit results
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (error) {
        // Improved error handling: return the error message
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Adjust as per your CORS policy
            },
        };
    }
};

module.exports = { handler };

// update-bucketlist.js

require('dotenv').config();
const { MongoClient, ObjectId } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    const { id } = event.queryStringParameters;
    if (!id || event.httpMethod.toLowerCase() !== 'put') {
        return { statusCode: 405, body: JSON.stringify({ Error: 'Method Not Allowed' }) };
    }

    try {
        console.log("Received PUT request. ID:", id);
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const data = JSON.parse(event.body);
        console.log("Update data:", data);

        const updatedItem = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
                    title: data.title,
                    description: data.description,
                    targetDate: new Date(data.targetDate),
                    category: data.category,
                    achieved: data.achieved,
                    priority: data.priority
                }
            },
            { returnOriginal: false }
        );

        if (updatedItem === null) {
            return {
                statusCode: 404,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Error: 'Bucket List item not found.' })
            };
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem.value)
        };
    } catch (error) {
        console.error("Error updating item:", error);
        if (error.name === 'MongoServerSelectionError') {
            return {
                statusCode: 500,
                body: JSON.stringify({ Error: 'Failed to connect to the database.' })
            };
        }
        return {
            statusCode: 400,
            body: JSON.stringify({ Error: 'Failed to update the Bucket List item.' })
        };
    }
};

module.exports = { handler };

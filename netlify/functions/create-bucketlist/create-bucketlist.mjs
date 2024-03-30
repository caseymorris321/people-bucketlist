require('dotenv').config();
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const data = JSON.parse(event.body);
        const insertedItem = await collection.insertOne({
            title: data.title,
            description: data.description,
            targetDate: new Date(data.targetDate),
            category: data.category,
            achieved: data.achieved,
            priority: data.priority
        });

        if (insertedItem.insertedCount === 1) {
            return {
                statusCode: 201,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(insertedItem.ops[0])
            };
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to create a new Bucket List item.' })
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to create a new Bucket List item.' }),
        };
    }
};

module.exports = { handler };

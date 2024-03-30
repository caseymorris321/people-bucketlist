require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event) => {
    try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);

        if (event.httpMethod === 'POST') {
            const data = JSON.parse(event.body);
            const result = await collection.insertOne(data);
            return {
                statusCode: 201,
                body: event.body, // Pass the event body directly
            };
        } else {
            return {
                statusCode: 405,
                body: JSON.stringify({ error: 'Method Not Allowed' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() }),
        };
    } finally {
        await client.close();
    }
};

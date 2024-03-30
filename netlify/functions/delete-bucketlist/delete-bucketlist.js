require('dotenv').config();
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const { ObjectId } = require("mongodb"); 

const handler = async (event) => {
    const { id } = event.queryStringParameters;

    if (event.httpMethod !== 'DELETE') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        await mongoClient.connect(); 
        const database = mongoClient.db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const result = await collection.deleteOne({ _id: new ObjectId(id) }); 

        if (result.deletedCount === 1) {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Success: 'Successfully deleted the Bucket List item.' })
            };
        } else {
            return {
                statusCode: 404,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Error: 'Bucket List item not found.' })
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 400,
            body: JSON.stringify({ Error: 'Failed to delete the Bucket List item.' })
        };
    } finally {
        await mongoClient.close(); 
    }
}

module.exports = { handler };

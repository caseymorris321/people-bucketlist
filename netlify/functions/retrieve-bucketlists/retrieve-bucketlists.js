const { MongoClient } = require('mongodb');

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DATABASE;
let collectionName = process.env.MONGODB_COLLECTION;

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    console.log('Using cached database instance');
    return cachedDb;
  }
  
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  
  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const bucketLists = await collection.find({}).limit(10).toArray();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Adjust according to your CORS policy
      },
      body: JSON.stringify(bucketLists)
    };
    
  } catch (error) {
    console.error('An error occurred while connecting to MongoDB', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to connect to the database' })
    };
  }
};

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://michalkosiorek:tF9PXJxrFUhR83ck@pmsdb.5nrb2.mongodb.net/?retryWrites=true&w=majority&appName=PMSDB";

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB Atlas');
        return client.db();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Export the connection function and client for use in other files
module.exports = {
    connectToDatabase,
    client
};

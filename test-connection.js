const { connectToDatabase, client } = require('./config/database');

async function testConnection() {
    try {
        const db = await connectToDatabase();
        console.log('Database connection test successful!');
        
        // List all collections in the database
        const collections = await db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));
        
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await client.close();
    }
}

testConnection();

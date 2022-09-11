const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:test123@demo.2isk9.mongodb.net/?retryWrites=true&w=majority"


async function getBlogs() {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('demodb');
    // execute find query
    const items = await db.collection('blogs').find({}).toArray();
    client.close();
    return items
    
}

async function blogByDate(date) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('demodb');
    // execute find query
    const items = await db.collection('blogs').find({date:date}).toArray();
    client.close();
    return items
}

module.exports = {
    getBlogs,
    blogByDate
}
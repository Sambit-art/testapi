
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:test123@demo.2isk9.mongodb.net/?retryWrites=true&w=majority"
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Yaa friend, You are at right place")
})

app.get('/data', (req, res) => {
    
    async function data() {
        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // specify the DB's name
        const db = client.db('demodb');
        // execute find query
        const items = await db.collection('users').find({}).toArray();
        client.close();
        return items
    }
    data().then((data)=>{res.json(data)})
})


app.listen(3000, () => {
    console.log('server started at port 3000');
})


const express = require('express')
const app=express()

app.get('/data', (req, res) => {
    
   res.send('hello world')
})

app.listen(3000, () => {
    console.log('server started at port 3000');
})

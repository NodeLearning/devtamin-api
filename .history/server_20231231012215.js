const express = require('express');
const app = express();
const port = 3000;

// define routes
app.get('/', (req, res)=> {
    res
})

app.listen(3000, ()=> {
    console.log("Node API is running on port 3000");

})
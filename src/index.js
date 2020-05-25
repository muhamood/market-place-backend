const express = require('express');
const path = require('path');
const app = require('./app');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
       res.send('hello world!');

});

app.listen(port, ()=> console.log(`Server running on ${port}`));



const app = require('./app');

const mongodb = require('./db/db')

mongodb.db().then(() => {
       console.log("connection success");
       
}).catch(console.log)
const port = 3000;

app.get('/', (req, res)=>{
       res.send('hello world!');

});

app.listen(port, ()=> console.log(`Server running on ${port}`));



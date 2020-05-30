const app = require('./app');

const {database} = require('./db/db')


database().then(() => {

console.log("connection success");

 const port = 3000;

app.get('/', (req, res)=>{
       res.send('hello world!');

});

app.listen(port, ()=> console.log(`Server running on ${port}`));
       
}).catch(console.log);






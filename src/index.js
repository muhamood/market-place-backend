const app = require('./app');
const authRouter = require('./auth');
const itemRouter = require('./item');

const {
    database
} = require('./db/db')


database().then(() => {

    console.log("connection success");

    const port = 3000;


    app.get('/', (req, res) => {
        res.send('hello world!');
    });

    app.use('/', authRouter);
    app.use('/', itemRouter);

    app.listen(port, () => console.log(`Server running on ${port}`));

}).catch(console.log);
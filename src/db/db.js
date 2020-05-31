const mongoose = require('mongoose');

const connection = () => mongoose.connect('mongodb://localhost/marketplace_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    database: connection,

}
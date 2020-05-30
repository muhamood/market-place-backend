const mongoose = require('mongoose');

const connection = () => mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

module.exports = {
    database: connection,

}
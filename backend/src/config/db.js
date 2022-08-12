const mongoose = require('mongoose');

const connect = ()=> {
    return mongoose.connect('mongodb+srv://neha:neha@cluster0.kkll8jw.mongodb.net/?retryWrites=true&w=majority');
}


module.exports = connect;
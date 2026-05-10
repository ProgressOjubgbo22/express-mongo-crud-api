const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://Gabriel:Jason22@cluster0.sgmbncz.mongodb.net';

const connectDB = async() => {
    try{
        await mongoose.connect(mongoURL);
        console.log("connected");
    } catch(error) {
        console.error("error", error.message); 
        process.exit(1);
    }
};

module.exports = connectDB;

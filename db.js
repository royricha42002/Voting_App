const { request } = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
// const mongoURL = 'mongodb://localhost:27017/person';
// const atlas = 'mongodb+srv://hello_world:richa@cluster0.jlffzpf.mongodb.net'

const DB_LOCALHOST = process.env.DB_LOCALHOST;
const DB_ATLAS = process.env.DB_ATLAS;

console.log(DB_LOCALHOST);

mongoose.connect(DB_LOCALHOST,{useNewUrlParser:true, useUnifiedTopology:true});


const db = mongoose.connection;


db.on('connected',()=>{
    console.log("connected to mongodb server");
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = db;

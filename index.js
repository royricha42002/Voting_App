const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(bodyParser.json());
const {jwtAuthMiddleware} = require('./jwt');   
const PORT = process.env.PORT || 3000;


// Import the router files
const userRoutes = require('./routess/userRoutes');
const candidateRoutes = require('./routess/candidateRoutes');


// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => console.log("Server is running on port 3000"));
const express = require("express");
const app = express();
const userRoutes = require('./routess/userRoutes');
const candidateRoutes = require('./routess/candidateRoutes');

require('dotenv').config();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
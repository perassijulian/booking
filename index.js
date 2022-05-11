const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const morgan = require('morgan')

//database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('DB connected succesfully'))
    .catch((error) => console.log(error));

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes


//backend server listener
app.listen(process.env.PORT || 5000, () => console.log('Server running'))
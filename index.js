const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const businessRoute = require('./routes/business');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true }, 
    () => console.log('connected to db!')
);

//Middleware
app.use(express.json());


//Routes middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/business', businessRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server up and running'));
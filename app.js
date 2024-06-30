//imports...
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const genresRouter = require('./routes/genreRouter');
const customerRouter = require('./routes/customerRouter');
//configs
dotenv.config(); //add env found in .env file to the NODE ENV (process.env)
const app = express();

//Middlewares
//use morgan middleware to moniter the incomming requests if development
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
//add middleware to parse the json sent in the request:
app.use(express.json());
//middleware genres router:
app.use('/api/genres', genresRouter);
app.use('/api/customers', customerRouter);

//connecting to mongodb:
mongoose
  .connect(process.env.DATABASE)
  .then(console.log('connection to the database successful...'))
  .catch(err => console.error('connection to the database fail...', err.message));

//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

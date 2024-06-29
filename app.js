const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const genresRouter = require('./routes/genreRouter');
//use morgan to moniter the incomming requests
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//add middleware to parse the json sent in the request:
app.use(express.json());

app.use('/api/genres', genresRouter);

//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

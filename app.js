const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
//add middleware to parse the json sent in the request:
app.use(express.json());

//get all genres
app.get('/api/genres', (req, res) => {
  res.status(200).json({ data: { genres: '<list of all genres>' } });
});

//create new genres
app.post('/api/genres', (req, res) => {
  const newGenres = req.body;

  res.status(201).json({ data: { genres: '<genres created>' } });
});

// get single genres
app.get('/api/genres/:id', (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //Search for id...
  res.status(200).json({ data: { genres: '<single genres>' } });
});

//Update genres
app.put('/api/genres/:id', (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  res.status(200).json({ data: { genres: '<Updated genres>' } });
});

//Delete genres
app.put('/api/genres/:id', (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  res.status(204).json({ data: { genres: null } });
});
//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

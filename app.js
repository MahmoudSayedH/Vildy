const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
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
  res.status(201).json({ data: { genres: '<single genres>' } });
});

//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

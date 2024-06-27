const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
//get all genres
app.get('/api/genres', (req, res) => {
  res.status(200).json({ data: { genres: '<list of all genres>' } });
});
//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

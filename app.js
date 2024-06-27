const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//run the server and wait for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port} ...`));

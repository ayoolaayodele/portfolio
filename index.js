const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Connect Database
connectDB();

app.use(bodyParser.json());

app.use(cors());

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

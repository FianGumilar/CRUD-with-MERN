require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.listen(5000, () => {
    console.log('Server listening on port http://localhost:5000');
})
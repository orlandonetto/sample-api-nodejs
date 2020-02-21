require('./src/config');

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);

const port = 4000;
app.listen(port, () => console.log(`Started on port ${port}`));

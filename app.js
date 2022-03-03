const express = require('express');
const router = require('express-router');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const routes = require('./routes/routes');
//Route Connections
app.use(routes);
  
app.listen(port, () => console.log(`Listening on port ${port}!`));



const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');



//Log request to the console
app.use(logger('dev'));


// Parse incoming requests data
app.use(bodyParser.json()); // whenever a get or a post call is made then react knows to send then information in a json object
app.use(bodyParser.urlencoded({ extended: false }));




require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome, please create a task'
}));

module.exports = app;




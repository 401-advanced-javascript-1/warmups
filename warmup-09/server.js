'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/routes.js');
const errorHandler = require('./middleware/404.js');

app.use('/public', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router);
app.use(errorHandler);

module.exports = {
    app, // Express app
    start: port =>
      app.listen(port, err => {
        if (err) {
          console.error('There was an error starting the server...');
        } else {
          console.log(`You are connected to the Express server on port ${port}`);
        }
        }),
};
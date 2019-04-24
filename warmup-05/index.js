'use strict';

const PORT = process.env.PORT || 3000
const { start } = require('./server.js');

start(PORT);
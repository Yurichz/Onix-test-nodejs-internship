const express = require('express');
const controller = require('./controller');

const app = express();

app.listen(3000, () => console.log('server opened on: 127.0.0.1:3000'));

app.get('/rates', controller.getCurrentRates);

const express = require('express');
const app = express()
const cors = require('cors');

const ContactController = require('./controllers/contact.controller');

app.use(cors());

app.use('/contact', ContactController);

module.exports = app;
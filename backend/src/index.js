const express = require('express');
const app = express()
const cors = require('cors');

const ContactController = require('./controllers/contact.controller');
const MessageController = require('./controllers/message.controller');

app.use(cors());

app.use('/contact', ContactController);
app.use('/message', MessageController);

module.exports = app;
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/contact', routes);

app.get('/', (req, res) => {
    res.send("Welcome to the Phonebook API.");
});

app.listen(3001, () => {
    console.log(`Listening on port 3001.\nGo to http://localhost:3001`);
});

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'public', 'templates'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
    res.render('index');
});

// start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
const express = require('express');
const app = express();
const path = require('path');

// Settings

    app.set('port', app.get('port'));
    app.set('views', path.join(__dirname, 'views'));
    app.set('views engine', 'ejs');
    const morgan =  require('morgan');
const { json } = require('express');
const bodyParser = require('body-parser');


// Middleware

app.use(morgan('dev'));
app.use(express,json());
app.use(express.urlencoded({extends:false}));
app.use(bodyParser.json())




// Routes

app.use(require('./routes/index'));

// Static

app.use(express.static(path.join(__dirname, 'public')));

// 404 handler

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
})



module.exports = app;
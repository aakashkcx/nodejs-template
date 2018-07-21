'use strict';

// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// Components
const router = require('./routes');

// Initialise app
const app = express();

// Set port
app.set('port', (process.env.PORT || 8080));

// Routing
app.use('/', router);

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie-parser middleware
app.use(cookieParser());

// Start the server
app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port')}`));
// Imports
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();
const port = process.env.port || 8080;

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));

// Routing
app.use('/', router);

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
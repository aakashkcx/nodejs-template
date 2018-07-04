// Imports
const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const router = require('./routes')
const port = process.env.port || 8000

// View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routing
app.use('/', router)

// Set static path
app.use(express.static(path.join(__dirname, 'public')))

// Start the server
app.listen(port, () => console.log(`Server started on ${port}`));
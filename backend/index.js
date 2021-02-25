// Insertar luego de la siguiente línea
let express = require('express') // Initialize the app

let app = express(); // Setup server port

var port = process.env.PORT || 8081 // send message for default URL

app.get('/', (req, res) => res.send('Hello World with Express')); // Launch app to listen to specified port

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});



// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded ({
    extended: true
}));app.use(bodyParser.json());

// Import routes
let apiRoutes = require("./api-routes")

//Use API routes in the App
app.use('/api', apiRoutes);

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/mongodatabase', { useNewUrlParser: true});

var db = mongoose.connection;
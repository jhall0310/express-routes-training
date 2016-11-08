// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  // send the text 'Hello World!' when someone visits localhost:3000/
  console.log('req = ', req);
  console.log('res = ', res);

  //res.send('Hello World!');
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/art-gallery', function (request, response) {
  response.sendFile('views/art-gallery.html' , { root : __dirname});
});


// Gallery View Route


// The Number Guessing Game
app.post('/', function pickNumber(request, response) {
var userNumber = request.body.number;
if(userNumber < 10){
response.send('Try again too low');
console.log('Try again too low');
}
else {
  response.send('Try again too high')
  console.log('Nope');
}

if (userNumber === 10) {
  response.send('Finally took you long enough')
  console.log("Finally took you long enough");
}

});



// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});

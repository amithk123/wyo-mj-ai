require ('dotenv').config();
const express = require('express')
const app = express()
//post data parser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
const port = 8000
require('./src/models');
app.use('/imageFolder', express.static(__dirname+'/public/images'));
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Access is not allowed')
})


// handle cors origin
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



const prompt_generator = require('./src/routes/prompt_generator');
const midgourney_api = require('./src/routes/midjourneyApi');
const users = require('./src/routes/users');
const product = require('./src/routes/product');
const chatGPT = require('./src/routes/chatGPT');

app.use('/mjAPI', product);
app.use('/mjAPI', prompt_generator);
app.use('/mjAPI', midgourney_api);
app.use('/users', users);
app.use('/chatGPT', chatGPT);



module.exports = app;
 
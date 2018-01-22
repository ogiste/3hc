import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './config';
import webpack_config from './matapes.webpack.config.js';

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
var webpackMiddleware = require("webpack-dev-middleware");

var handleLaunchFlaunt = function(error, data){
	if (error){
		console.log("Error: ");
		console.log(error);
		return null; 

	} else{
		//console.log(data);
		return data;

	}
}; 

var getNewFlauntValue= function(done){
	if (done) {
		var sprinkles = done(null,"Yah");
		console.log(sprinkles);
		return console.log("Bitch...");
	};
};




const compiler = webpack(webpack_config);
const app = express();


//http.createServer(app).listen(config.port,'0.0.0.0');
app.use(webpackMiddleware(compiler, {
    noInfo: false,
    quiet:false,
    publicPath: webpack_config.output.publicPath
}));
app.use(express.static(__dirname + '/public'));
console.log("publicPath: ",webpack_config.output.publicPath);
console.log("distFilePath: ",webpack_config.output.path);
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/app/dist/matapes.html'));
});

app.listen(config.port, function (error) {
    if(error) {
        console.log(error);
    }else{
      console.log('Server started and listening on ' + config.port);
      setTimeoutPromise(2940, handleLaunchFlaunt).then(getNewFlauntValue);
      open('http://localhost:${config.port}');
    }
});




//report progress
//console.log('Server started and listening on ' + config.port);
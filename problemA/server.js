var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('app'));
var iLastTime = 0;

app.post('/', function (req, res) {
   var body = req.body;

	var iTime = 0;
	var iTotal = 0;
	var iKeys = 0;
	var temp;
	iTime = new Date().getTime();

	if (iLastTime != 0) {
	     iKeys++;
	     iTotal += iTime - iLastTime;
	     iWords = body.text.split(/\s/).length;
	     temp = Math.round(iWords / iTotal * 6000, 2);
	}

	iLastTime = iTime;
	console.log('temp',temp);
	var result = {
		length : body.text.split(' ').length,
		wpm:temp
	}
   res.json(result);
   res.end();
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
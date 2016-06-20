var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var port = process.env.PORT || 8080;

//supplied local items
var localItems = [
    14225185,	
    14225186,
    14225188,
    14225187,
    39082884,
    30146244,
    12662817,
    34890820,
    19716431,
    42391766,
    35813552,
    40611708,
    40611825,
    36248492,
    44109840,
    23117408,
    35613901,
    42248076
];

//set options to accept API calls
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.post('/', function(req, res) {
  //isolate item to look for
  var item = req.url.slice(2);
  //get items with same keyword
  request.get('http://api.walmartlabs.com/v1/search?format=json&apiKey=kjybrqfdgp3u4yv2qzcnjndj&query=' + item, 
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //parse response body
            var info = JSON.parse(response.body);
            //isolate itemId's
            var mappedFromWMAPI = info.items.map((item) => { return item.itemId });
            //send back matching items
            res.send(mappedFromWMAPI.filter((item, i) => { return localItems.includes(item)}));
        }
    });
});

//start server and listen
app.listen(port, function() {
  console.log('Listening at :' + port);
});
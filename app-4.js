var express = require('express');
var app = express();

app.use(express.static('public'));
// Which one should we use?? 
//app.get('/index.html', function handleHomePage(request, response) {
//	response.sendFile(__dirname + "/public/index.html");
//});

app.get('/process_get', function handleProcessGet(request, response) {
    retVal = {
        firstName: request.query.firstName,
        lastName: request.query.lastName
    };
    console.log(retVal);
    response.send(JSON.stringify(retVal));
});

var server = app.listen(3000, function ServerListner() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Using Forms and Express, listening at http://%s:%s", host, port);
});

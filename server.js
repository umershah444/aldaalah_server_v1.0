var app = require('express')();
var http = require('http').Server(app);
 require('./routes/routes.js')(app);

http.listen(8080, function(){
  console.log('listening on *:3000');
});

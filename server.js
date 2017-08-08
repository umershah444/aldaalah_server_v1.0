var app = require('express')();
var http = require('http').Server(app);
 require('./routes/routes.js')(app);

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});

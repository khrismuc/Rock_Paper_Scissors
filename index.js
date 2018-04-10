var http = require("http");
var route = require('./route');

var html;

function onRequest(request, response) {
  if (request.method === 'GET') {
        response.writeHead(200);
        response.write(route.getFile(request.url));
        response.end('');
    } 
}
http.createServer(onRequest).listen(3000);
console.log("Server has started.");
// const express = require('express');
// var favicon = require('serve-favicon');
var http = require("http");
var route = require('./route');

// var html;
// app.use(favicon(__dirname + '/public/images/favicon.ico'));
function onRequest(request, response) {
  if (request.method === 'GET') {
        response.writeHead(200);
        response.write(route.getFile(request.url));
        response.end('');
    } 
}
require("http-server").createServer().listen(3000);
console.log("Server has started.");
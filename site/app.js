'use strict';
(require('rootpath')());
var database = require('services/database/db'); 
var koa = require('koa'); 
var app = koa(); 
module.exports = app;

function main() { 
  app.listen(3000);
  console.log('now listening on port 3000');
}
main();
//database.connect(function (err) { if (err) { // ... } main(); });
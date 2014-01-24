var express = require("express");
var harp = require("harp");
var app = express();

app.configure(function(){
   app.use(express.static(__dirname + "/"));
   app.use(harp.mount(__dirname + "/"));
});

app.listen(process.env.PORT);
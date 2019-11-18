var express = require('express');
var app = express();
var request = require('request');
var env = require('./config.js');

//Aca es donde vamos a tener los metodos que usaremos
const conexionesRoutes = require('./api/routes/conexiones');

app.use('/conexion', conexionesRoutes.router);


request.get(
    env.server,
    function (error, response, body) {
        if (response) {
            console.log("-1-");
            console.log(response);
        }
    }
);

module.exports = app;
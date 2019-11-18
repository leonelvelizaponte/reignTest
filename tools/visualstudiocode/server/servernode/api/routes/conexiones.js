const express = require('express');
const router = express.Router();
var request = require('request');
var env = require('../../config.js');

const http = require('http');
var request = require('request');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var app = express();
var articulos = [];

const CONNECTION_URL = "mongodb+srv://" + env.mongouser + ":" + env.mongopass + "@" + env.mongostring;
const DATABASE_NAME = env.mongoclustername;

//metodo para validar que esta arriba el servicio y responde al routing
router.get('/up', (req, res, next) => {
    res.status(200).json({
        message: 'Servernode UP!'
    });
});

//con este metodo donde llamamos a la base de datos y retornamos la respuesta
router.get('/articulos', (req, res, next) => {
    console.log("get /articulos");
    request.get(
        env.serverdata,
        function (error, response, body) {
            if (response) {
                //abrimos la conexion a la base de datos
                MongoClient.connect(CONNECTION_URL, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db(DATABASE_NAME);
                    //realizamos la consulta y luego con el db.close() cerramos la conexion con la base de datos
                    dbo.collection("articles").find({}).sort({ created_at: -1 }).toArray(function (err, docs) {
                        //console.log("Se encontraron los siguientes datos:");
                        //console.log(docs)
                        db.close();
                        res.send(docs);
                    });
                });
            }
        }
    );
});


module.exports = { router };
const http = require('http');
const app = require('./app');
var env = require('./config.js');
var request = require('request');
var schedule = require('node-schedule');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

//En el config.js tenemos seteado el puerto que usaremos 
const port = env.port;

const server = http.createServer(app);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = "mongodb+srv://" + env.mongouser + ":" + env.mongopass + "@" + env.mongostring;
const DATABASE_NAME = env.mongoclustername;

server.listen(port, function () {
    console.log('Servidor esta corriendo en el puerto ' + port + ', Express está escuchando...');

    //Con esta funcion al iniciar el server llamamos a la api donde esta la data que vamos a ocupar
    request.get(
        env.serverdata,
        function (error, response, body) {
            if (response) {
                let apidata = JSON.parse(response.body);;
                MongoClient.connect(CONNECTION_URL, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db(DATABASE_NAME);
                    var myobj = apidata.hits;
                    dbo.collection("articles").insertMany(myobj, function (err, respuesta) {
                        if (err) throw err;
                        console.log("Numero de documentos insertados: " + respuesta.insertedCount);
                        db.close();
                    });
                });
                console.log("Se cargaron datos")
            }
        }
    );
});

//al instalar y configurar de esta manera el schedule.scheduleJob
//hacemos que cada hora a cuando llegue al minuto 55 haga la llamada a la api
//de donde sacamos la info
var j = schedule.scheduleJob('55 * * * *', function () {
    request.get(
        env.serverdata,
        function (error, response, body) {
            if (response) {
                let apidata = JSON.parse(response.body);
                //abrimos la conexion con la base de datos
                MongoClient.connect(CONNECTION_URL, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db(DATABASE_NAME);
                    var myobj = apidata.hits;
                    dbo.collection("articles").insertMany(myobj, function (err, respuesta) {
                        if (err) throw err;
                        console.log("Numero de documentos insertados: " + respuesta.insertedCount);
                        db.close();
                    });
                });
            }
        }
    );
});

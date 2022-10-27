const express = require ('express');
const app = express();

//asignar puerto 
app.listen (3100, ()=> console.log ('servidor corriendo'));
app.set ("view engine", "ejs");
app.set ("views", "./src/views");

//Configuración de carpeta Pública
const path = require ("path");
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Requerimientas y Rutas
const routesMain = require ('./routes/routesMain');
const routesProduct = require ('./routes/routesProduct')
app.use ('/', routesMain);
app.use ('/productos', routesProduct);
const express = require('express')
require('dotenv').config();


// Crear el servidor de express
const app = express()

//Middleware
// Directorio Público
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api', require('./routes/epayco') );

 
// Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
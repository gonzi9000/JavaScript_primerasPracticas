const express = require('express');
const app = express();
const path = require('path');
const rutaMain = require('./routers/main.js');

app.listen(3000, () =>{ console.log('Servidor Corriendo en el puerto 3000');});


app.use(express.static(path.join(__dirname,'./public')));

app.use ('/', rutaMain);
app.use ('/about', rutaMain);


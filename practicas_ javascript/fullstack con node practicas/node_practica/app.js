const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () =>
console.log('Run Server On Port: 3000')); // configuracion del puerto local host

app.get('/404', (req, res) =>{
    res.send('Error Page Not Found') // en caso de no encontrar la pagina
});

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.ejs'))
});
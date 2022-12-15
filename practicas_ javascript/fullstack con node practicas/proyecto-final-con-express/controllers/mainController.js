 const fs = require('fs');
 const path = require('path');

 const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const imagesFilePath = path.join(__dirname, '../data/imagenes.json');
const imagenes = JSON.parse(fs.readFileSync(imagesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


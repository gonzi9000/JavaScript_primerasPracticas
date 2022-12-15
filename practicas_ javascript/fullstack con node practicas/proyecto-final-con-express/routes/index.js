const { json } = require('express');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const json_usuarios = fs.readFileSync('./data/usuarios.json', 'utf-8');

let crearUsuario = JSON.parse(json_usuarios);

const app = require('../app');




// const mainComtroller= require('../controllers/mainController');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    crearUsuario });
});


//----------------------------PRODUCTOS-------------------------------------------------------
 
// CREATE-----------------nuevo producto
router.get('/nuevoProducto', (req, res) =>{
  res.render('nuevoProducto');
});

// READ-------------------leer productos
router.get('/productos', (req, res) =>{
  res.render('productos')
})

// EDIT---------------------editar producto
router.get('/editarProducto', (req, res) =>{
  res.render('editarProducto')
})


// DELETE--------------------elinar producto
router.get('/eliminarProducto', (req, res) => {
  res.render('eliminarProducto');
});


//---------------------------------------USUARIOS-------------------------------------------------------

// CREATE------------------- crear usuario
router.get('/nuevoUsuario',(req, res) => {
  res.render('nuevoUsuario');
});

router.post('/nuevoUsuario', (req, res) =>{
  const{nombre, apellido, email, imagen} = req.body;
  if(!nombre || !apellido || !email || !imagen){
    res.status(400).send('Debes Completar todos los Campos');
    return;
  }
  let newUsuario = {
    id: uuidv4(),
    nombre,
    apellido,
    email,
    imagen
  };
  crearUsuario.push(newUsuario);

  const json_usuarioNuevo = JSON.stringify(crearUsuario);    // escribir archivo
  fs.writeFileSync('./data/usuarios.json', json_usuarioNuevo, 'utf-8');   // leer archivo

  res.redirect('/'); // redirecionamiento una ves cargado los datos a la pagina principal
});


// READ------------------- leer usuario
router.get('/usuarios',(req, res) => {
  res.render('usuarios');
});

// UPDATE----------------actualizar usuarios
router.get('/editarUsuario', (req, res) =>{
  res.render('editarUsuario');
});

// DELETE-----------------eliminar usuario
router.get('/eliminarUsuario', (req, res) =>{
  res.render('eliminarUsuario');
});

 
router.get('/eliminar/:id', (req, res) => {
  crearUsuario = crearUsuario.filter(crearUsuario => crearUsuario.id != req.params.id);

  const json_usuarioNuevo = JSON.stringify(crearUsuario);    // escribir archivo
  fs.writeFileSync('./data/usuarios.json', json_usuarioNuevo, 'utf-8');   // leer archivo

  res.redirect('/'); // redirecionamiento una ves cargado los datos a la pagina principal
});  




module.exports = router;

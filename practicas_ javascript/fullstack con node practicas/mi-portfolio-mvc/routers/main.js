let express = require('express');
let router = express.Router();

let controladores = require('../controllers/mainController.js');


router.get('/', controladores.home);
router.get('/about', controladores.about);
module.exports = router;

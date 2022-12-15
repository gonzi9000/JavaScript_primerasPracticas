const platillos = require('../data/menu');// menu serie el json

const controller = {         // define una variable objeto q va requerir y responder datos

    home: function(req, res) {
        res.render('index');
    }
}
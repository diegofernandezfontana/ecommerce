var db = require('./db');
const Sequelize = require('sequelize');

const Ventas = db.define('ventas', {
    status: {
        type: Sequelize.ENUM('creado', 'procesando', 'cancelado', 'completado'),
    },
    fecha: {
        type: Sequelize.DATE,
    },
    importe: {
        type: Sequelize.INTEGER,
    },
    direccion: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
    carro: {
        type: Sequelize.TEXT('long')
    }
});

module.exports = Ventas;

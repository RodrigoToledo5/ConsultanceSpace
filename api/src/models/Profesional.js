const {Sequelize,DataTypes} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
    //definimos el modelo.
    sequelize.define('profesional', {
        cedula: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false	
		},
		apellidos: {
			type: DataTypes.STRING,
			allowNull: false	
		},
		telefono: {
			type: DataTypes.BIGINT,	
		},
	},{
		timestamps: false,
	});
};//,
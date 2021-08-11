const {Sequelize,DataTypes} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
    //definimos el modelo.
    sequelize.define('profesional', {
        cedula: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false	
		},
		apellidos: {
			type: DataTypes.STRING,
			allowNull: false	
		},
        especialidad: {
			type: DataTypes.STRING,
			allowNull: false	
		},
        usuario_email: {
			type: DataTypes.STRING,
			allowNull: false	
		}
	},{
		timestamps: false,
	});
};//,
const {DataTypes,Sequelize} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
	//* defino el modelo
	sequelize.define('cita', {
		fecha: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		hora: {
			type: DataTypes.DATE,
			allowNull : false,
		},
		status:{
			type: DataTypes.STRING,
			allowNull: false,
		}
	},{
		timestamps: false,
	});
};
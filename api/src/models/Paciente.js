const {DataTypes,Sequelize} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
	//* defino el modelo
	sequelize.define('paciente', {
		DNI: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull : false,
		},
		apellidos:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefono:{
			type : DataTypes.BIGINT,
			allowNull: false,
		},
		fecha_de_nacimiento:{
			type: DataTypes.DATE,
			allowNull: false,
		},
		direccion:{
			type: DataTypes.TEXT,
			allowNull : false,
		},
		pais:{
			type: DataTypes.STRING,
			allowNull: false
		},
		id_Historia_Clinica:{
			type: DataTypes.BIGINT,
			allowNull: false,
		}
	},{
		timestamps: false,
	});
};
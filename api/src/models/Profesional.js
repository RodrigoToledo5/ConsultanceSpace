const {Sequelize,DataTypes} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
    //definimos el modelo.
    sequelize.define('profesional', {
        cedula: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false	
		},
		apellidos: {
			type: DataTypes.STRING,
			allowNull: false	
		},
		fecha_de_nacimiento:{
			type: DataTypes.DATE,
			allowNull: false,
		},
		
		pais:{
			type: DataTypes.STRING,
			allowNull: false
		},
		telefono: {
			type: DataTypes.BIGINT,
			allowNull: false
		},   
		direccion: {
			type: DataTypes.STRING,
			allowNull: false
		},
		subscripcion: {
			type: DataTypes.STRING,//no
			allowNull: true
		},
		token:{
			type: DataTypes.STRING,
			allowNull: true
		},
		fullName: {
			type: DataTypes.VIRTUAL,
			get:function(){
				return `${this.nombre} ${this.apellidos}`;
			},
		},
	//fecha de incripcion en la plataforma
	});
};
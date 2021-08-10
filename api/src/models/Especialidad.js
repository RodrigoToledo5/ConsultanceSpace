const {Sequelize,DataTypes} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
    //definimos el modelo.
    sequelize.define('especialidad', {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false	
		}
		
	});
};
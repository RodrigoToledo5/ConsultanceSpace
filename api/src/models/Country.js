const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
			type: DataTypes.STRING(3),
			primaryKey: true,
			allowNull: false,
		},//checkear que sea un codigo de 3 letras 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImg: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    continent: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    capital: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	subregion: {
			type: DataTypes.STRING,
		},
    area: {
			type: DataTypes.FLOAT,
		},
	population: {
			type: DataTypes.INTEGER,
		},
  });
};

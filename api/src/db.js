require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/consultas`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  define:{
    freezeTableName: true
  }
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
      (file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Usuario, Profesional, Paciente, Especialidad, Cita } = sequelize.models;


///aqui van las relaciones
/* Country.belongsToMany(Activity, {through: 'CountryActivity'});
Activity.belongsToMany(Country, {through: 'CountryActivity'}); */
Usuario.hasOne(Profesional);
Profesional.belongsTo(Usuario);
//Relacion Usuario- Paciente
Usuario.hasOne(Paciente);
Paciente.belongsTo(Usuario);
//Relacion  Paciente - profesional
Paciente.belongsToMany(Profesional,{through: 'profesional_paciente'});
Profesional.belongsToMany(Paciente,{through: 'profesional_paciente'})

//Profesional - especialidad
Profesional.belongsToMany(Especialidad, {through: 'profesional_especialidad'});
Especialidad.belongsToMany(Profesional, {through: 'profesional_especialidad'});

//cita-profesional
Profesional.belongsToMany(Cita, {through: 'profesional_cita'});
Cita.belongsToMany(Profesional, {through: 'profesional_cita'});

// cita-paciente
Paciente.belongsToMany(Cita, {through: 'paciente_cita'});
Cita.belongsToMany(Paciente, {through: 'paciente_cita'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  
};

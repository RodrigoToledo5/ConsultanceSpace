//                                ___________
//                               [___________]
//                                {=========}
//                              .-'         '-.
//                             /               \
//                            /_________________\
//                            | _  _  _ __    _ |
//                            ||_)|_)/ \ /|\ /  |
//       ,.----.   ,.----.    ||  | \\_//_|~\\_ |
//      //  \   \ //  \   \   |_________________|
// jgs  \\   \  / \\   \  /   |                 |
//       `'----'   `'----'    '-----------------'
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {especialidadesjson}  = require("./especialidades.js");
const {Especialidad} = require('./src/db');
let port= process.env.PORT||3005

// CLIENT PARA LAS REDIRECCIONES DE PAGO DE SUBSCRIPCION, CAMBIAR AL HACER DEPLOY O LO QUE SEA
const CLIENT = "http://localhost:3001"

conn.sync({ force: true }).then(() => {
  especialidadesjson.forEach(async (especialidad)=>{
    try{
      await Especialidad.findOrCreate({
          where:{
              nombre:especialidad
          }
        });
    }
    catch(error){
      console.log(error);
    }
  })
  
  console.log("Loaded");
  server.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});

module.exports = CLIENT;
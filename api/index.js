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



conn.sync({ force: false }).then(() => {
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

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

conn.sync({ force: false}).then(() => {
  console.log("Loaded");
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});

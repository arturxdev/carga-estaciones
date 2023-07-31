const fs = require("fs");
const { parse } = require("csv-parse");
fs.createReadStream("./equipos.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    if (row[2]) {
      console.log( `INSERT INTO machines (type,machine_id,station_id) VALUES ('tvm','${ row[0] }','${row[2]}')`);
    }
    if (row[3]) {
      console.log( `INSERT INTO machines (type,machine_id,station_id) VALUES ('tvm','${ row[0] }','${row[3]}')`);
    }
    if (row[4]) {
      console.log( `INSERT INTO machines (type,machine_id,station_id) VALUES ('expendedora','${ row[0] }','${row[4]}')`);
    }
    if (row[5]) {
      console.log( `INSERT INTO machines (type,machine_id,station_id) VALUES ('expendedora','${ row[0] }','${row[5]}')`);
    }
  });

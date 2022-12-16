import { createConnection } from "mysql";

function insertMessage(message, reply = 0) {
  const connectionUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };

  const connection = createConnection(connectionUri);
  connection.connect();

  let sql = `INSERT INTO message (message, reply) VALUES ('${message}', ${reply})`;
  connection.query(sql);

  console.log("Record Addedd!");

  connection.end();
}

function readMessage() {
  const connectionUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };

  const connection = createConnection(connectionUri);
  connection.connect();

  let sql = `SELECT * FROM message`;
  connection.query(sql, (err, results) => {
    // console.log(results);
    return results;
  });

  connection.end();
}

function main() {
  // insertMessage("Hello Delhi!!!");
  let results = readMessage();
  console.log(results);
}

main();

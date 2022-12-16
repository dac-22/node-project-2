import { createConnection } from "mysql";

function main() {
  const connectionUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };

  const connection = createConnection(connectionUri);
  connection.connect();

  let message = "Helloo How re are u";
  let sql = `INSERT INTO message (message, reply) VALUES ('${message}', 0)`;
  connection.query(sql);

  console.log("Record Addedd!");

  connection.end();
}

main();

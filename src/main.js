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

  console.log("CONNECTION SUCCESS!!!");

  // close the connection
  connection.end();
}

main();

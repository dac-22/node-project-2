import { createConnection } from "mysql";
import bluebird from "bluebird";

let connectionUri = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "cdac",
};

function main() {
  let connection = createConnection(connectionUri);
  bluebird.promisifyAll(connection);

  // Callback Based Methods
  connection.connect(); // connectAsync
  connection.query(); // queryAsync
  connection.end(); // endAsync
}

main();

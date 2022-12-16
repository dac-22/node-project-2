import { createConnection } from "mysql";
import bluebird from "bluebird";

let connectionUri = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "cdac",
};

async function main() {
  let connection = createConnection(connectionUri);
  bluebird.promisifyAll(connection);

  await connection.connectAsync();

  let sql = "SELECT * FROM message";
  let results = await connection.queryAsync(sql);

  connection.endAsync();
  console.log(results);
}

main();

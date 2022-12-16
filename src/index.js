import express from "express";
const app = express();

/** Learning here Creating URLs / Endpoints */

/*  http://localhost:3000/  */
app.get("/", (req, res) => res.send("Hello!"));

/*  http://localhost:3000/cdac  */
app.get("/cdac", (req, res) => res.send("Hello 2!"));

/*  http://localhost:3000/explore  */
app.get("/explore", (req, res) => res.send("Hello 3!"));

app.listen(3000);

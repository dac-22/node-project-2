import express from "express";
const app = express();

/** Learning here Creating URLs / Endpoints */

/*  http://localhost:3000/  */
app.get("/", (req, res) => res.send("Hello!"));

/*  http://localhost:3000/message  */
app.get("/message", (req, res) => {
  let message = { id: 1, message: "Hi", messageTime: new Date() };
  res.json(message);
});

/*  http://localhost:3000/messages  */
app.get("/messages/", (req, res) => {
  let list = [];
  list.push({ id: 1, message: "Hi", messageTime: new Date() });
  list.push({ id: 2, message: "Hello", messageTime: new Date() });

  res.json(list);
});

app.listen(3000);

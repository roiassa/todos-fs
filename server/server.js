const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config/cfg");
const connectToDb = require("./db/db");

const app = express();

app.use(bodyParser.json());

app.use("/api", require("./routes/todos"));

connectToDb().then(() => {
  console.log("DB is connected");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});

//aplikasi pertama expressjs yang di buat
const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");
const userRoute = require('./routers/data')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

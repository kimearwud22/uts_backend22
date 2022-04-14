const express = require("express");
const routerData = express.Router();
const dataController = require('../controller/data')


routerData
  .route("/users")
  .get(dataController.getUsers)
  .post(dataController.addUsers)
routerData.route("/users/:nim")
  .get(dataController.getUsersByNim)
  .put((req, res) => {
    res.send("put All Users");
  })
  .delete(dataController.deleteUsers);

module.exports = routerData;
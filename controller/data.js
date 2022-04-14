const dataModuls = require('../moduls/data')

module.exports = {
  getUsers: (req, res) => {
    dataUsers = dataModuls.getUsers;
    res.json(dataUsers)
  },
  addUsers: (req, res) => {
    const user = req.body;
    dataUsers.push(user);
    res.json(dataUsers);
  },
  getUsersByNim: (req, res) => {
    res.send("data berhasil ditampilkan");
  },
  deleteUsers: (req, res) => {
    let nim = req.params.nim;
    users = dataUsers.filter((user) => {
      return user.nim !== nim;
    });
    res.send("selete" + nim);
  },
};

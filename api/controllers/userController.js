var userService = require("../services/userService");
var User = require("../models/user");

exports.createUser = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  try {
    var user = await userService.createUser(email, password);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "Succesfully Create User",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (User.find({ email, password })) {
    return res.status(400).json({ status: 400, message: "User dont exist" });
  }
  try {
    await userService.deleteUser(email, password);
    return res.status(200).json({
      status: 200,
      message: "Succesfully Delete User",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllUser = async function (req, res) {
  try {
    var user = await userService.getAllUser();
    return res.json(user);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.editUser = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (User.find({ email, password })) {
    return res.status(400).json({ status: 400, message: "User dont exist" });
  }
  try {
    await userService.editUser(email, password);
    return res.status(200).json({
      status: 200,
      message: "Succesfully Edit User",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.loginUser = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  let result = await User.exists({ email, password });
  if (result != null) {
    return res.status(200).json({ status: 200, message: "login", exist: true });
  } else {
    return res
      .status(200)
      .json({ status: 200, message: "user dont exist", exist: false });
  }
};

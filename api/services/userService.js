const e = require("express");
var User = require("../models/user");

exports.createUser = async function (email, password) {
  try {
    var user = await User.create({ email, password });
    return user;
  } catch (e) {
    throw e;
  }
};

exports.deleteUser = async function (email, password) {
  User.findOneAndUpdate({ email }, { password }, function (err, doc) {
    if (err) throw err;
  });
};

exports.deleteUser = async function (email, password) {
  User.deleteOne({ email, password }, function (err) {
    if (err) throw e;
  });
};

exports.getAllUser = async function () {
  try {
    var user = User.find();
    return user;
  } catch (err) {
    throw e;
  }
};

exports.existsUser = function (email, password) {
  try {
    var user = User.count({ email, password });
    return user;
  } catch (e) {
    throw e;
  }
};

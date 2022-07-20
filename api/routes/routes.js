const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/user/create", userController.createUser);
  app.delete("/user/delete", userController.deleteUser);
  app.get("/user/getAll", userController.getAllUser);
  app.post("/user/edit", userController.editUser);
  app.post("/user/login", userController.loginUser);
};

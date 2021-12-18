const { getAllUsers, addUser, getOneUser, editUser, deleteUser } = require("../controllers/userCtrl");

const router = require("express").Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getOneUser);

router.post("/add", addUser);

router.put("/edit/:id",editUser)

router.delete("/delete/:id",deleteUser)
module.exports = router;

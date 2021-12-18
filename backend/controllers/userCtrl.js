const User = require("../models/User");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const { name, age, address, email } = req.body;
    const newUser = new User({ name, age, email, address });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const editedUser = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(editedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUsers, addUser, getOneUser, editUser,deleteUser };

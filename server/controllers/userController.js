const { User } = require("../model/userModel");

const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error in getUsers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports = {
  getUsers,
};

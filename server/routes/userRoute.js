
const { Router } = require("express");
const { getUsers } = require("../controllers/userController");

const router = Router();

router.get("/user", getUsers);


module.exports = router;
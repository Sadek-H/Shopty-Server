const { registerUser, getAllUser, getUseremail, updateUser } = require("../controllers/userController");


const router =require("express").Router();

router.post('/register', registerUser);
router.get("/users", getAllUser);
router.get("/users/:email", getUseremail );
router.patch("/users/:id", updateUser );
module.exports = router; 
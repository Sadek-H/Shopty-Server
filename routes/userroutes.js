const { registerUser, getAllUser, getUseremail } = require("../controllers/userController");


const router =require("express").Router();

router.post('/register', registerUser);
router.get("/users", getAllUser);
router.get("/users/:email", getUseremail );
module.exports = router;
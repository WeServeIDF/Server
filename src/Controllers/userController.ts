import express, { Router } from 'express';
const router : Router = express.Router();
import { loginUser, registerUser, getUser, updateUser } from "../Services/userService";

router.post('/login', loginUser);

router.post('/register', registerUser);

router.get('/:id', getUser);

router.put('/:id', updateUser)

module.exports = router;
import express, { Router } from 'express';
const router : Router = express.Router();
import { loginUser, registerUser, getUser, updateUser } from "../Services/userService";
import { auth } from '../middlewires/auth';

router.post('/login', loginUser);

router.post('/register', registerUser);

router.get('/', auth, getUser);

router.put('/', auth, updateUser)

module.exports = router;
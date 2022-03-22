import express from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';

import { h1 } from '../routes/index.html';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ h1 });
});

export default router;
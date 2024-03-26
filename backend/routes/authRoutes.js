import express from 'express';
import { current_user, login } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);

router.get('/current', current_user);

export default router;

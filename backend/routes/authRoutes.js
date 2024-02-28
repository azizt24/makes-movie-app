import express from 'express';
import { login, current_user } from '../controllers/auth';

const router = express.Router();

router.post('/login', login);
router.get('/current_user', current_user);

export default router;

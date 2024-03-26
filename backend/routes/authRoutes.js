const express = require('express');
const router = express.Router();
const { login, current_user } = require('../controllers/auth');

router.post('/login', login);

router.get('/current', current_user);

module.exports = router;

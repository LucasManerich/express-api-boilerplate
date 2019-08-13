const express = require('express');
const LoginController = require('./controllers/LoginController');
const AuthMiddleware = require('./middlewares/auth');
const router = express.Router();

router.post('/login', LoginController.login);
router.post('/registro', LoginController.registro);
router.get('/sessao', AuthMiddleware, LoginController.verificaSessao);

module.exports = router; 
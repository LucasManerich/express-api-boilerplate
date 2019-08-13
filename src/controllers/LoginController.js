const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ email, senha });
    
    if (!user) {
      return res.status(401).json({ msg: 'Usuário ou senha incorretos!' })
    }

    const token = await jwt.sign({ id: user._id }, '@App#App');

    return res.json({ user, token });
  },

  async registro(req, res) {
    const { nome, email, senha } = req.body;
    const user = await Usuario.create({
      nome,
      email,
      senha
    });
    return res.json(user);
  },

  async verificaSessao(req, res) {
    return res.json({ success: true });
  }
}
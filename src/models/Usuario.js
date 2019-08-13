const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true
  }
})

UsuarioSchema.set('timestamps', true);

module.exports = model('Usuarios', UsuarioSchema);
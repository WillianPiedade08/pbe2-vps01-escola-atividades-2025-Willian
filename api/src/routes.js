const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/Aluno');
const Atividade = require('./controllers/Atividade');
const Telefone = require('./controllers/Telefone');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});


routes.post('/Alunos', Aluno.create);
routes.get('/Alunos', Aluno.read);
routes.patch('/Alunos/:id', Aluno.update);
routes.delete('/Alunos/:id', Aluno.remove);

routes.post('/Atividades',Atividade.create);
routes.get('/Atividades',Atividade.read);
routes.patch('/Atividades/:id',Atividade.update);
routes.delete('/Atividades/:id',Atividade.remove);

routes.post('/Telefones',Telefone.create);
routes.get('/Telefones',Telefone.read);
routes.patch('/Telefones/:id',Telefone.update);
routes.delete('/Telefones/:id',Telefone.remove);

module.exports = routes;
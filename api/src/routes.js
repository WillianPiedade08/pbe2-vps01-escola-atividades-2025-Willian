const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
const Atividade = require('./controllers/atividade');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

routes.post('/alunos', Aluno.create);
routes.get('/alunos', Aluno.read);
routes.get('/alunos/:id', Aluno.readOne); 
routes.patch('/alunos/:id', Aluno.update);
routes.delete('/alunos/:id', Aluno.remove);

routes.post('/atividades', Atividade.create);
routes.get('/atividades', Atividade.read);
routes.get('/atividades/:id', Atividade.readOne);
routes.patch('/atividades/:id', Atividade.update);
routes.delete('/atividades/:id', Atividade.remove);

module.exports = routes;
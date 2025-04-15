const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
const atividade = require('./controllers/Atividade');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

routes.post('/alunos', Aluno.create);
routes.get('/alunos', Aluno.read);
routes.get('/alunos/:id', Aluno.readOne); 
routes.patch('/alunos/:id', Aluno.update);
routes.delete('/alunos/:id', Aluno.remove);

routes.post('/atividades', atividade.create);
routes.get('/atividades', atividade.read);
routes.get('/atividades/:id', atividade.readOne);
routes.patch('/atividades/:id', atividade.update);
routes.delete('/atividades/:id', atividade.remove);

module.exports = routes;
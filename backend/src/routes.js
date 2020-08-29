const express = require('express');

const UsuarioController = require('./controllers/UsuarioController')


const routes =  express.Router();
 
routes.get('/usuario/:id', UsuarioController.view);
routes.get('/usuario/:id/classe', UsuarioController.view);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:id', UsuarioController.remove);

routes.get('/login', UsuarioController.login);

routes.get('/classes', UsuarioController.view);

routes.get('/atividades', UsuarioController.view);

routes.get('/habito/:id', UsuarioController.view);
routes.patch('/habito/:id', UsuarioController.view);
routes.post('/habito', UsuarioController.create);
routes.delete('/habito/:id', UsuarioController.remove);

routes.get('/rotina/:id', UsuarioController.view);
routes.patch('/rotina/:id', UsuarioController.view);
routes.post('/rotina', UsuarioController.create);
routes.delete('/rotina/:id', UsuarioController.remove);

routes.get('/tarefa/:id', UsuarioController.view);
routes.patch('/tarefa/:id', UsuarioController.view);
routes.post('/tarefa', UsuarioController.create);
routes.delete('/tarefa/:id', UsuarioController.remove);

routes.get('/conquistas', UsuarioController.view);

routes.get('/itens', UsuarioController.view); //Filtrar por possuído ou equipado
routes.post('/item/equipar-item', UsuarioController.view); //Alterar equipado
routes.post('/item/comprar-item', UsuarioController.view); //Alterar equipado

routes.get('/grupos', UsuarioController.view);
routes.get('/grupo/:id', UsuarioController.view);
routes.get('/grupo/:id/membros', UsuarioController.view);
routes.get('/grupo/:id/mensagens', UsuarioController.view);
routes.post('/grupo/:id/mensagem', UsuarioController.view);

routes.get('/missoes', UsuarioController.view);

routes.get('/grupo/:id/missao-atual', UsuarioController.view);
routes.get('/grupo/:id/missoes', UsuarioController.view);
routes.post('/grupo/:id/missao', UsuarioController.view);

module.exports = routes;
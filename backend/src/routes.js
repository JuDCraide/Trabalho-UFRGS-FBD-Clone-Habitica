const express = require('express');

const UsuarioController = require('./controllers/UsuarioController')
const ClasseController =  require('./controllers/ClasseController');
const ItemController = require('./controllers/ItemController');
const HabitoController = require('./controllers/HabitoController');
const RotinaController = require('./controllers/RotinaController');
const TarefaController = require('./controllers/TarefaController');
const ConquistasController = require('./controllers/ConquistasController');

const routes =  express.Router();
 
routes.get('/usuario/:id', UsuarioController.view);
routes.get('/usuario/:id/classe', ClasseController.view);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:id', UsuarioController.remove);

routes.post('/login', UsuarioController.login);

routes.get('/classes', ClasseController.list);

routes.get('/usuario/:id/habito', HabitoController.list);
routes.get('/habito/:id', HabitoController.view);
routes.patch('/habito/:id', HabitoController.view);
routes.post('/habito', HabitoController.create);
routes.delete('/habito/:id', HabitoController.remove);

routes.get('/usuario/:id/rotina', RotinaController.list);
routes.get('/rotina/:id', UsuarioController.view);
routes.patch('/rotina/:id', UsuarioController.view);
routes.post('/rotina', UsuarioController.create);
routes.delete('/rotina/:id', UsuarioController.remove);

routes.get('/usuario/:id/tarefa', TarefaController.list);
routes.get('/tarefa/:id', UsuarioController.view);
routes.patch('/tarefa/:id', UsuarioController.view);
routes.post('/tarefa', UsuarioController.create);
routes.delete('/tarefa/:id', UsuarioController.remove);

routes.get('/usuario/:id/conquistas', ConquistasController.listObtidas);
routes.get('/usuario/:id/conquistas-restantes', ConquistasController.listNaoObtidas);

routes.get('/itens', ItemController.view); //Filtrar por possuído ou equipado
routes.post('/item/equipar-item', ItemController.view); //Alterar equipado
routes.post('/item/comprar-item', ItemController.view); 
routes.get('/itens/mercado', ItemController.list8);

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
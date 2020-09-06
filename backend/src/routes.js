const express = require('express');

const UsuarioController = require('./controllers/UsuarioController')
const ClasseController =  require('./controllers/ClasseController');
const ItemController = require('./controllers/ItemController');
const HabitoController = require('./controllers/HabitoController');
const RotinaController = require('./controllers/RotinaController');
const TarefaController = require('./controllers/TarefaController');
const ConquistasController = require('./controllers/ConquistasController');
const MensagemController = require('./controllers/MensagemController');
const GrupoController = require('./controllers/GrupoController');
const MissaoController = require('./controllers/MissaoController');
const AtividadeController = require('./controllers/AtividadeController');

const routes =  express.Router();
 
routes.get('/usuario/:id', UsuarioController.view);
routes.get('/usuario/:id/classe', ClasseController.view);
routes.get('/usuario/:id/grupo', GrupoController.getGrupoByUserId);


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
routes.post('/rotina', RotinaController.create);
routes.delete('/rotina/:id', UsuarioController.remove);

routes.get('/usuario/:id/tarefa', TarefaController.list);
routes.get('/tarefa/:id', UsuarioController.view);
routes.patch('/tarefa/:id', UsuarioController.view);
routes.post('/tarefa', TarefaController.create);
routes.delete('/tarefa/:id', UsuarioController.remove);

routes.post('/atividade', AtividadeController.do);

routes.get('/usuario/:id/conquistas', ConquistasController.listObtidas);
routes.get('/usuario/:id/conquistas-restantes', ConquistasController.listNaoObtidas);

routes.get('/itens', ItemController.view); //Filtrar por possuído ou equipado
routes.post('/item/equipar-item', ItemController.equipar);
routes.post('/item/desequipar-item', ItemController.desequipar);
routes.post('/item/comprar-item', ItemController.comprar); 
routes.get('/itens/mercado', ItemController.list8);
routes.get('/usuario/:id/itens', ItemController.listUsuario);
routes.get('/usuario/:id/itens-equipados', ItemController.listEquipados);

routes.post('/grupo', GrupoController.create);
routes.get('/grupo/:id', GrupoController.view);
routes.get('/grupo/:id/membros', GrupoController.viewMembros);
routes.post('/grupo/:id/membro', GrupoController.addUser);
routes.delete('/grupo/:id/membro', GrupoController.removeUser);
routes.get('/grupo/:id/mensagens', MensagemController.view);
routes.post('/grupo/:id/mensagem', MensagemController.create);

routes.get('/missoes', MissaoController.list);

routes.get('/grupo/:id/missao-atual', MissaoController.viewAtual);
routes.get('/grupo/:id/missoes', MissaoController.list);
routes.post('/grupo/:id/missao', MissaoController.comecar);
routes.patch('/grupo/:id/missao', MissaoController.dano);

module.exports = routes;
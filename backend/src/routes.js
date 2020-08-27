const express = require('express');

const UsuarioController = require('./controllers/UsuarioController')


const routes =  express.Router();

routes.get('/usuario/:id', UsuarioController.view);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:id', UsuarioController.remove);

routes.get('/login', UsuarioController.login);

/*routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',  IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',  IncidentController.delete);
*/

module.exports = routes;
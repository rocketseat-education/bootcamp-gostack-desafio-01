const {Router} = require('express');
const ProjectController = require('./controller/ProjectController');

const routes = Router();

routes.use((req, res, next) => {
    console.count(`numero de requisiçoes`);
    next();
});
routes.get('/projects', ProjectController.index);
routes.delete('/projects/:id',ProjectController.check, ProjectController.delete);
routes.put('/projects/:id', ProjectController.check, ProjectController.update);
routes.post('/projects',  ProjectController.store);
routes.post('/projects/:id/tasks', ProjectController.check, ProjectController.store);

module.exports = routes;

const express = require('express');
const server = express();

/**
 * A variável `projects` pode ser `const` porque um `array`
 * pode receber adições ou exclusões mesmo sendo uma constante.
 */
const projects = [];

function logRequests(req, res, next) {
    console.time('Request');
    console.count('Requests')
    console.log(`Method: ${req.method}, URL: ${req.url}.`);
    next();
    console.timeEnd('Request');
};

/**
 * Middleware que checa se o projeto existe
 */
function validateProjectID(req, res, next) {
    const { id } = req.params;
    const projectFound = projects.find(project => project.id == id);
    if(!projectFound) {
        return res.status(404).json({ error: 'Project not found.'})
    }
    req.projectFound = projectFound
    req.id = id;
    return next();
};

server.use(express.json());
server.use(logRequests);

server.post('/projects', (req, res) => {
    const { id } = req.body
    const { title } = req.body;
    projects.push({ "id": id, "title": title });
    return res.json(projects);
});

server.post('/projects/:id/tasks', validateProjectID, (req, res) => {
    if(req.projectFound.tasks) {
        req.projectFound.tasks.push(req.body.tasks);
    } else {
        req.projectFound["tasks"] = [req.body.tasks];
    }    
    return res.json(req.projectFound);    
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.get('/projects/:id', validateProjectID, (req, res) => {
    return res.json(req.projectFound)
});

server.put('/projects/:id', validateProjectID, (req, res) => {
    req.projectFound.title = req.body.title;
    return res.json(req.projectFound);
});

server.delete('/projects/:id', validateProjectID, (req, res) => {
    var projectToDelete = projects.indexOf(req.projectFound)
    projects.splice(projectToDelete, 1);
    return res.json(projects);
});

server.listen(3333);
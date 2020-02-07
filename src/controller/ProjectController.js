const Project = require('../model/Project')
const filterIndex = require('../util/filterIndex');
const filterValue = require('../util/filter');
const projects = [];

module.exports = {
    check(req, res, next) {
        const {id} = req.params;
        const filter = filterValue(projects, 'id', id);
        if(filter.length == 0) {
          return  res.status(400).json({error: 'Não encontrado o id do projeto'});
        }

        next();
    },

    async index(req, res) {
       return res.json(projects);
    },

    async store(req, res) {
      const {id} = req.body;
      const {title} = req.body;
      const index = req.params.id;

        if(!id || !title) {
            res.status(400).json({error: 'O projeto não pode ser nulo'});
        }

        const filter = filterValue(projects, 'id', id);
        if(filter.length == 0) {
            const project = new Project();
            project.id = id;
            project.title = title;

            if(index) {
               project.tasks.push(title);
            }

            projects.push(project);
        }


        return res.json(projects);

    },

    async update(req, res) {
        const {id} = req.params;
        const {title} = req.body;

        if(!title) {
            res.status(400).json({error: 'O projeto não pode ser nulo'});
        }

        if(projects) {
            const indexArray =  filterIndex(id, projects, 'id')
            if(indexArray != null) {
                projects[indexArray].title = title;
            }

        }

        return res.json(projects);

    },

    async delete(req, res) {
       const {id} = req.params;
       const indexArray =  filterIndex(id, projects, 'id')

       if(indexArray != null) {
           projects.splice(indexArray, 1);
       }

       return res.send();
    },


}

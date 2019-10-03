const TaskMaster = require('./models').TaskMaster;


module.exports = {
    create(req, res) {
        return TaskMaster
            .create({
                name: req.body.name,
                description: req.body.description,
                priority: req.body.priority

            })
            .then(task => res.status(201).send(task))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return TaskMaster
            .all()
            .then(tasks => res.status(200).send(tasks))
            .catch(error => res.status(400).send(error));
    }
}



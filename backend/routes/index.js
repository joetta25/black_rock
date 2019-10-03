const taskController = require('../index2').newTask;

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to Task Master!'
    }));

    app.post('/task', taskController.create);
    app.get('/tasks', taskController.list);
};
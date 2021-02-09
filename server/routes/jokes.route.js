const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.get("/api/jokes/random", JokeController.findOneSingleJokeRandom);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}
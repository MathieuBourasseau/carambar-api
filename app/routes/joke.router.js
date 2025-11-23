import express from "express";

// Create a router instance
export const jokeRouter = express.Router();

// Road to get all the jokes
jokeRouter.get('/jokes', jokeController.getAll);

// Road to get a random joke
jokeRouter.get('/jokes/random', jokeController.getRandomJoke);

// Road to add a new joke
jokeRouter.post('/jokes', jokeController.addJoke);

// Road to get a joke by ID
jokeRouter.get('/jokes/:id', jokeController.getById);

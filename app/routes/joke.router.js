import express from "express";
import { JokeController } from "../controllers/index.controller.js";
import { checkId } from "../middlewares/checkId.js";

// Create a router instance
export const jokeRouter = express.Router();

// Road to get all the jokes
jokeRouter.get('/jokes', JokeController.getAll);

// Road to get a random joke
jokeRouter.get('/jokes/random', JokeController.getRandomJoke);

// Road to add a new joke
jokeRouter.post('/jokes', JokeController.addJoke);

// Road to get a joke by ID
jokeRouter.get('/jokes/:id', checkId, JokeController.getById);

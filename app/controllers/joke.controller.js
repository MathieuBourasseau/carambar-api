import { CoreController } from "./index.controller.js";
import { Joke } from "../models/index.model.js";
import { sequelize } from "../config/sequelize.client.js";
import { createJokeSchema } from "../schemas/joke.schema.js";
import Joi from "joi";

// JokeController class to handle joke-related requests
// Extends the CoreController to inherit common functionalities
class JokeController extends CoreController {

    // Method to get all jokes
    getAll = async (req, res) => {
        try {

            // Fetch all joke records from the database
            const jokes = await Joke.findAll();

            // Respond with HTTP 200 and the retrieved jokes
            res.status(200).json(jokes);

        } catch (error) {

            // Use CoreController helper to send a standardized 500 response
            this.json500(req, res, error);
        }
    };

    // Method to get a random joke
    getRandomJoke = async (req, res) => {
        try {
            
            // Find a random joke among the database
            const randomJoke = await Joke.findOne({
                order: sequelize.random()
            });
            
            // In case of joke database is empty
            if(!randomJoke) {
                return this.json404(req, res, "Aucune blague aléatoire n'est disponible pour le moment.")
            }

            // Respond with HTTP 200 and the random joke
            res.status(200).json(randomJoke);


        } catch (error) {
            this.json500(req, res, error);
        }
    };

    // Method to add a new joke to the database
    addJoke = async (req, res) => {
        try {

            // Validate the joke data
            const { question, answer } = Joi.attempt(req.body, createJokeSchema);

            // Insert a new joke record in the database
            const newJoke = await Joke.create({
                question,
                answer
            });

            // Respond with HTTP 201 Created and the new joke
            res.status(201).json(newJoke)

        } catch(error) {
            
            // If validation error from Joi, return a 400 Bad Request with details
            if (error.isJoi) {
                return this.json400(req, res, error.message);
            }

            // For any other errors, return a 500 Internal Server Error
            this.json500(req, res, error);
        }
    };

    //Method to get a joke by its ID
    getById = async(req, res) => {
        try {
            
            // Catch the id from the request
            const { id } = req.params;

            // Search the joke according to the id in the database
            const joke = await Joke.findByPk(id);
            
            // If the joke is not found in the database
            if(!joke){
                return this.json404(req, res, `La blague avec l'id ${id} n'existe pas.`)
            }

             // Respond with HTTP 200 and display the joke selected
             res.status(200).json(joke);

        } catch (error) {

             // For any other errors, return a 500 Internal Server Error
            this.json500(req, res, error);
        }
    };

}

export default new JokeController(); 

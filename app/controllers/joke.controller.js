import { CoreController } from "./index.controller.js";
import { Joke } from "../models/index.model.js";
import { sequelize } from "../config.js/sequelize.client.js";

// JokeController class to handle joke-related requests
// Extends the CoreController to inherit common functionalities
class JokeController extends CoreController {

    // Method to get all jokes
    getAll = async (req, res) => {
        try {
            const jokes = await Joke.findAll();
            res.status(200).json(jokes);
        } catch (error) {
            this.json500(req, res, error);
        }
    }

    


}
import { DataTypes, Model } from "sequelize"; // Required to create models
import { sequelize } from "../config.js/sequelize.client.js"; // Corresponds to the database connection

export class Joke extends Model {}

Joke.init(
    // Definition of model attributes
    // These correspond to the table fields
    {
        question: {
            type : DataTypes.STRING, // Joke question with a maximum length of 255 characters
            allowNull: false,   // Set as not nullable
        },

        answer: {
            type: DataTypes.STRING, // Joke answer with a maximum length of 255 characters
            allowNull: false,   // Set as not nullable
        },
    },
    
    {
        sequelize, // Database connection information
        modelName: "Joke", // Name of the model
        tableName: "joke" // Name of the table in the database
    }
);
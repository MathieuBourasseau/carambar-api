import express from "express";
import cors from "cors";        
import dotenv from 'dotenv/config';
import { sequelize } from "./app/database/sequelize.client.js";
import { jokeRouter } from "./app/routes/joke.router.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc"

// Server configuration
const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON request bodies

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use('/api/v1', jokeRouter) ; // Use the joke router for API routes

// Load environment variables from .env file
const PORT = process.env.PORT || 3000;

try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully. ✅");
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

} catch (error) {
    console.error("Unable to connect to the database.❌", error);
}

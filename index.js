import express from "express";
import cors from "cors";        
import dotenv from 'dotenv/config';
import { sequelize } from "./app/config/sequelize.client.js";
import { jokeRouter } from "./app/routes/joke.router.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc"

// Server configuration
const app = express();

const corsOptions = {
    origin: [
        'http://localhost:5500',    // VS Code Live Server
        'http://127.0.0.1:5500',    // VS Code Live Server (IP)
        'http://localhost:3000',    // Front-end React/Vue local standard
        'https://mathieubourasseau.github.io', // Front-end GitHub Pages
        /\.vercel\.app$/
    ],
};

app.use(cors(corsOptions)); // Enable CORS for all routes

app.use(express.json()); // Parse JSON request bodies

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Load environment variables from .env file
const PORT = process.env.PORT || 3000;

const SERVER_URL = process.env.RENDER_EXTERNAL_URL 
    ? `${process.env.RENDER_EXTERNAL_URL}/api/v1` 
    : `http://localhost:${PORT}/api/v1`;

// Configuration of swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Carambar API',
            version: '1.0.0',
            description: 'Documentation de l\'API de blagues Carambar',
        },
        servers: [
            { url: `http://localhost:${PORT}/api/v1` } 
        ],
    },
    apis: ['./app/routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/api/v1', jokeRouter) ; // Use the joke router for API routes


try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully. ✅");
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

} catch (error) {
    console.error("Unable to connect to the database.❌", error);
}

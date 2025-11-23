import express from "express";
import { JokeController } from "../controllers/index.controller.js";
import { checkId } from "../middlewares/checkId.js";

export const jokeRouter = express.Router();

// 1. Model joke definition
/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: integer
 *           description: L'ID unique généré automatiquement
 *         question:
 *           type: string
 *           description: La devinette de la blague
 *         answer:
 *           type: string
 *           description: La réponse ou la chute
 *       example:
 *         id: 1
 *         question: "Quelle est la femelle du hamster ?"
 *         answer: "L'Amsterdam"
 */

// 2. Tags used
/**
 * @swagger
 * tags:
 *   - name: Blagues
 *     description: API de gestion des blagues Carambar
 */

// 3. Routes API

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: La liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur serveur
 */
jokeRouter.get('/jokes', (req, res) => JokeController.getAll(req, res));

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Obtenir une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague tirée au sort
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague disponible
 *       500:
 *         description: Erreur serveur
 */
jokeRouter.get('/jokes/random', (req, res) => JokeController.getRandomJoke(req, res));

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *       400:
 *         description: Données invalides (Joi)
 *       500:
 *         description: Erreur serveur
 */
jokeRouter.post('/jokes', (req, res) => JokeController.addJoke(req, res));

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Récupérer une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID numérique de la blague
 *     responses:
 *       200:
 *         description: La blague demandée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague introuvable
 *       400:
 *         description: ID invalide
 *       500:
 *         description: Erreur serveur
 */
jokeRouter.get('/jokes/:id', checkId, (req, res) => JokeController.getById(req, res));

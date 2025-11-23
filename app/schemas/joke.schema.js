import Joi from "joi";

// Validation schema for creating a joke
export const createJokeSchema = Joi.object({
    question: Joi.string().min(30).max(255).trim().required(), // Question requires at least 30 characters and max 255
    answer: Joi.string() // Answer can have max 255 characters
});

import Joi from "joi";

// Validation schema for creating a joke
export const createJokeSchema = Joi.object({
    question: Joi.string().min(5).max(255).trim().required(), // Question requires at least 5 characters and max 255
    answer: Joi.string().min(1).max(255).trim().required() // Answer can have max 255 characters
});

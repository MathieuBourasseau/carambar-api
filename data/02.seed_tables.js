
import { sequelize } from "../app/config/sequelize.client.js";
import { Joke } from "../app/models/index.model.js";

console.log("🚧 Insertion des blagues (Seed)...");

const jokesData = [
    {
        question: "Quelle est la femelle du hamster ?",
        answer: "L’Amsterdam"
    },
    {
        question: "Que dit un oignon quand il se cogne ?",
        answer: "Aïe"
    },
    {
        question: "Quel est l'animal le plus heureux ?",
        answer: "Le hibou, parce que sa femme est chouette."
    },
    {
        question: "Pourquoi le football c'est rigolo ?",
        answer: "Parce que Thierry en rit"
    },
    {
        question: "Quel est le sport le plus fruité ?",
        answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes."
    },
    {
        question: "Que se fait un Schtroumpf quand il tombe ?",
        answer: "Un Bleu"
    },
    {
        question: "Quel est le comble pour un marin ?",
        answer: "Avoir le nez qui coule"
    },
    {
        question: "Qu'est ce que les enfants usent le plus à l'école ?",
        answer: "Le professeur"
    },
    {
        question: "Quel est le sport le plus silencieux ?",
        answer: "Le para-chuuuut"
    },
    {
        question: "Quel est le comble pour un joueur de bowling ?",
        answer: "C’est de perdre la boule"
    }
];

try {
    // Insert multiple joke records into the database
    await Joke.bulkCreate(jokesData);
    console.log(`✅ ${jokesData.length} blagues ont été insérées avec succès !`);
} catch (error) {
    console.error("❌ Erreur lors de l'insertion des données :", error);
} finally {
    await sequelize.close();
}
import { sequelize } from "./app/config/sequelize.client.js";
import { Joke } from "./app/models/joke.model.js";

async function initDB() {
    try {
        console.log("🚧 Synchronisation des tables...");
        await sequelize.sync({ alter: true });

        console.log("✅ Tables synchronisées avec succès !");
        process.exit(0);
    } catch (error) {
        console.error("❌ Erreur lors de la création des tables :", error);
        process.exit(1);
    }
}

initDB();
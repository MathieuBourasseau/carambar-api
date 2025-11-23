import { sequelize } from "../app/config/sequelize.client.js";
import { Joke } from "../app/models/index.model.js"

console.log("🚧 Tables creation");
await sequelize.sync({ force: true });
console.log("✅ Tables created successfully");

await sequelize.close();

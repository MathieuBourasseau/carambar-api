import { sequelize } from "../app/models/index.js";

console.log("🚧 Tables creation");
await sequelize.sync({ force: true });
console.log("✅ Tables created successfully");

await sequelize.close();

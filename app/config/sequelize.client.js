import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config';

// Conditionnal bloc to use the good URL according to the context
const sequelizeInstance = process.env.PG_URL
  ? new Sequelize(process.env.PG_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, 
        },
      },
      logging: false,
      define: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    })
  : new Sequelize({
      dialect: 'sqlite',
      storage: 'database.sqlite',
      logging: false,
      define: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    });

export const sequelize = sequelizeInstance;
import { Sequelize } from "sequelize";

// Load environment variables
const {
  DB_HOST = "sql10.freesqldatabase.com",
  DB_NAME = "sql10782466",
  DB_USER = "sql10782466",
  DB_PASSWORD = "s4Fg4w4CIJ",
  DB_PORT = 3306,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: console.log, // Optional: Enable logging for debugging
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

export default sequelize;

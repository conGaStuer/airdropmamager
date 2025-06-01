// models/index.js
import Sequelize from "sequelize";
import configFile from "../config/config.json" assert { type: "json" };
import Airdrop from "./airdrop.model.js"; // import các model

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {
  Airdrop: Airdrop.init(sequelize), // gọi init nếu bạn dùng class Model
  sequelize,
  Sequelize,
};

export default db;

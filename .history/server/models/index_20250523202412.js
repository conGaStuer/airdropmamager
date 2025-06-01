import Sequelize from "sequelize";
import configFile from "../config/config.json" assert { type: "json" };
import AirdropModel from "./Airdrop.js";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Airdrop = AirdropModel(sequelize, Sequelize.DataTypes);

const db = {
  Airdrop,
  sequelize,
  Sequelize,
};

export default db;

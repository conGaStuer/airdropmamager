import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const Airdrop = sequelize.define(
  "Airdrop",
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    totalTokens: DataTypes.INTEGER,
  },
  {
    timestamps: true,
  }
);

export default Airdrop;

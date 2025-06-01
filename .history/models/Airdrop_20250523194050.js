// src/models/Airdrop.js
import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const Airdrop = sequelize.define(
  "Airdrop",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    tokenAmount: DataTypes.INTEGER,
    requirements: DataTypes.STRING,
  },
  {
    tableName: "airdrops", // Tên bảng trong MySQL
    timestamps: true, // tự động tạo createdAt / updatedAt
  }
);

export default Airdrop;

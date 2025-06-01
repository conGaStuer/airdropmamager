"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airdrop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // define association here nếu cần sau này (ví dụ: Airdrop.hasMany(Participant))
    }
  }

  Airdrop.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      type: DataTypes.INTEGER,
      requirements: DataTypes.STRING,
      raised: DataTypes.INTEGER,
      backer: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Airdrop",
      tableName: "airdrops",
      timestamps: true, // tạo createdAt và updatedAt tự động
    }
  );

  return Airdrop;
};

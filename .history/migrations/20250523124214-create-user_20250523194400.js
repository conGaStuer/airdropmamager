"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("airdrops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      tokenAmount: {
        type: Sequelize.INTEGER,
      },
      requirements: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("airdrops");
  },
};

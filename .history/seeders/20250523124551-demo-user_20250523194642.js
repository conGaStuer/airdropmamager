"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airdrops",
      [
        {
          name: "Crypto Launch Giveaway",
          description: "Nhận token miễn phí khi tham gia sự kiện ra mắt",
          startDate: new Date("2025-06-01"),
          endDate: new Date("2025-06-30"),
          tokenAmount: 5000,
          requirements: "Theo dõi Twitter, tham gia Telegram",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NFT Collector Airdrop",
          description: "Tặng NFT độc quyền cho người dùng mới",
          startDate: new Date("2025-07-01"),
          endDate: new Date("2025-07-15"),
          tokenAmount: 3000,
          requirements: "Sở hữu ít nhất 1 NFT trên marketplace",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DeFi User Rewards",
          description: "Phần thưởng token dành cho người dùng DeFi tích cực",
          startDate: new Date("2025-08-01"),
          endDate: new Date("2025-08-31"),
          tokenAmount: 8000,
          requirements: "Giao dịch tối thiểu 1000 USD trên nền tảng",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airdrops", null, {});
  },
};

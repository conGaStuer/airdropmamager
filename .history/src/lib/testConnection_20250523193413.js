import sequelize from "./sequelize";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Kết nối DB thành công!");
  } catch (error) {
    console.error("❌ Kết nối thất bại:", error);
  }
})();

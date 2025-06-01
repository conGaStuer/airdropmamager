import sequelize from "./sequelize.js";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Kết nối cơ sở dữ liệu thành công!");
  } catch (error) {
    console.error("❌ Kết nối thất bại:", error);
  } finally {
    await sequelize.close(); // đóng kết nối sau khi kiểm tra
  }
})();

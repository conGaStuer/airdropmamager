import { Sequelize } from "sequelize";

const sequelize = new Sequelize("airdropnoob", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

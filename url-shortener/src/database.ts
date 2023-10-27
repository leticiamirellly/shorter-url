import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://username:pass@localhost:3306/pitu");

export default sequelize;

import { Sequelize } from "sequelize";

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectDb };
export default sequelize;

import sequelize from "./config.js";
import userModel from "../models/user/index.js";
import teamModel from "../models/team/index.js";
import channelModel from "../models/channel/index.js";
import messageModel from "../models/message/index.js";

const syncDb = async () => {
  await sequelize.sync({ alter: true, force: false });
  // await userModel.sync({ alter: true, force: true });
  // await teamModel.sync({ alter: true, force: true });
  // await channelModel.sync({ alter: true, force: true });
  // await messageModel.sync({ alter: true, force: true });
};

export default syncDb;

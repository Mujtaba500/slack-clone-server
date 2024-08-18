import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/index.js";
import channelModel from "../channel/index.js";

const messageModel = sequelize.define(
  "Message",
  {
    // Model attributes are defined here

    text: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

userModel.hasMany(messageModel, {
  foreignKey: "userId",
});
messageModel.belongsTo(userModel, {
  foreignKey: "userId",
});

channelModel.hasMany(messageModel, {
  foreignKey: "channelId",
});

messageModel.belongsTo(channelModel, {
  foreignKey: "channelId",
});

export default messageModel;

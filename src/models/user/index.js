import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import teamModel from "../team/index.js";
import channelModel from "../channel/index.js";

const userModel = sequelize.define("User", {
  // Model attributes are defined here

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// m to m realtionship b/w teams and users
teamModel.belongsToMany(userModel, {
  foreignKey: "teamId",
  through: "membar",
});
userModel.belongsToMany(teamModel, {
  foreignKey: "userId",
  through: "membar",
});

// m to m realtionship b/w channels and users
channelModel.belongsToMany(userModel, {
  foreignKey: "channelId",
  through: "channel_membar",
});
userModel.belongsToMany(channelModel, {
  foreignKey: "userId",
  through: "channel_membar",
});

//Weird behaviour relating to usermodel so had to define here
userModel.hasMany(teamModel, {
  foreignKey: "owner",
});
teamModel.belongsTo(userModel, {
  foreignKey: "owner",
});

export default userModel;

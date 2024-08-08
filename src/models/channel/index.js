import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import teamModel from "../team/index.js";

const channelModel = sequelize.define(
  "Channel",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    public: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Other model options go here
  }
);

teamModel.hasMany(channelModel, {
  foreignKey: "teamId",
});
channelModel.belongsTo(teamModel, {
  foreignKey: "teamId",
});

export default channelModel;

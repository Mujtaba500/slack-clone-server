import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import teamModel from "../team/index.js";

const userModel = sequelize.define(
  "User",
  {
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
  },
  {
    // Other model options go here
  }
);

teamModel.belongsToMany(userModel, {
  foreignKey: "teamId",
  through: "membar",
});
userModel.belongsToMany(teamModel, {
  foreignKey: "userId",
  through: "membar",
});

//Weird behaviour relating to usermodel so had to define here
userModel.hasMany(teamModel, {
  foreignKey: "owner",
});
teamModel.belongsTo(userModel, {
  foreignKey: "owner",
});

export default userModel;

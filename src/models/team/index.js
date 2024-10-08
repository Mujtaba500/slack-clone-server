import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const teamModel = sequelize.define(
  "Team",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    // Other model options go here
  }
);

export default teamModel;

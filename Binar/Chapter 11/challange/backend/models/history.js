"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "id", as: "User" });
      this.belongsTo(models.Game, {
        foreignKey: "game_id",
        as: "Games",
      });
    }
  }
  History.init(
    {
      date: DataTypes.DATE,
      score: DataTypes.INTEGER,
      game_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
      freezeTableName: true,
      tableName: "Histories",
    },
  );
  return History;
};

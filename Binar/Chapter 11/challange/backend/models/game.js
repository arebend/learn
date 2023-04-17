"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.History, {
        foreignKey: "game_id",
        as: "History",
      });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      difficulty: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      isPlayable: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Game",
      freezeTableName: true,
      tableName: "Games",
    },
  );
  return Game;
};

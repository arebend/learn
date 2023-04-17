"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.History, { foreignKey: "user_id", as: "History" });
      this.hasOne(models.UserBiodata, {
        foreignKey: "userId",
        as: "UserBiodata",
        onDelete: "CASCADE",
      });
    }

    static #hash = (password) => {
      return bcrypt.hashSync(password, 10);
    };

    static register = ({ email, password }) => {
      const hashedPassword = this.#hash(password);
      return this.create({
        email,
        password: hashedPassword,
      });
    };

    static updateProfile = ({ email, password, id }) => {
      if (password) {
        const hashedPassword = this.#hash(password);

        return this.update(
          {
            email,
            password: hashedPassword,
          },
          { where: { id } },
        );
      } else {
        return this.update(
          {
            email,
          },
          { where: { id } },
        );
      }
    };

    checkPassword = (password) => {
      return bcrypt.compareSync(password, this.password);
    };

    generateToken = () => {
      const payload = {
        id: this.id,
        email: this.email,
      };

      let expiryTime = "1d";
      if (process.env.ENV === "development") {
        expiryTime = "1d";
      }
      return jwt.sign(payload, process.env.SECRET, { expiresIn: expiryTime });
    };

    logOut = () => {
      const payload = {
        id: this.id,
        email: this.email,
      };

      return jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
    };

    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) {
          return Promise.reject("user not found");
        }
        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) {
          return Promise.reject("Password invalid");
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error);
      }
    };
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};

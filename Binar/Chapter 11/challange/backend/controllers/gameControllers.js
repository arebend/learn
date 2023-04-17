const { Game } = require("../models");
const baseURL = process.env.BASEURL;
require("dotenv").config();

const listTopGame = (req, res, next) => {
  Game.findAll({
    where: {
      name: ["Gunting Batu Kertas", "Kelereng", "Gasing", "Congklak"],
    },
    order: [["id", "ASC"]],
  })
    .then((games) => {
      const mapGame = games.map((row) => {
        return { ...row.dataValues, image: `${baseURL}/images/${row.image}` };
      });

      res.status(200).json(mapGame);
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

const listGame = (req, res, next) => {
  Game.findAll()
    .then((games) => {
      const mapGame = games.map((row) => {
        return { ...row.dataValues, image: `${baseURL}/images/${row.image}` };
      });

      res.status(200).json(mapGame);
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

const createGame = (req, res, next) => {
  Game.create(req.body)
    .then(() => {
      res.json({
        response: 200,
        messages: "Success creating game",
      });
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

const gameDetail = (req, res, next) => {
  Game.findOne({ where: { id: req.params.id } })
    .then((game) => {
      const gameData = game.dataValues;
      const newObj = {
        ...gameData,
        image: `${baseURL}/images/${gameData.image}`,
      };

      res.status(200).json(newObj);
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

module.exports = {
  listTopGame,
  listGame,
  createGame,
  gameDetail,
};

const { History, Game } = require("../models");

const listGame = (req, res, next) => {
  History.findAll()
    .then((histories) => {
      res.status(200).json(histories);
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

const getUserHistories = (req, res, next) => {
  const id = req.params.userId;

  History.findAll({
    where: {
      user_id: id,
    },
    include: [{ model: Game, as: "Games" }],
    order: [["createdAt", "DESC"]],
  })
    .then((histories) => {
      res.status(200).json(histories);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        response: 500,
      });
      next(err);
    });
};

const getGameHistories = (req, res, next) => {
  const { game_id } = req.body;
  History.findAll({
    where: {
      game_id: game_id,
    },
  })
    .then((histories) => {
      res.status(200).json(histories);
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

const createGame = (req, res, next) => {
  const { user_id, game_id, score } = req.body;
  const date = Date.now();
  History.create({
    date,
    score,
    user_id,
    game_id,
    createdAt: date,
    updatedAt: date,
  })
    .then(() => {
      res.json({
        response: 200,
        messages: "Success creating history",
      });
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

function calculateHistory(histories){
  let temp = [];
  let gamePlayed = 0;
  let totalWin = 0;
  let totalLose = 0;
  let totalDraw = 0;
  temp =  [...histories];
    gamePlayed = temp.length;
     temp.forEach(element => {
      // win score 3, lose -1, draw 0
      if(element.score === 3){
        totalWin += 1;
      }else if(element.score === -1){
        totalLose += 1;
      }else if(element.score === 0){
        totalDraw += 1;
      }
     })
     return {gamePlayed,totalDraw,totalLose,totalWin};
}

const userStats = (req,res,next) => {
  
  History.findAll({
    where:{
      user_id:req.params.id
    }
  })
  .then( (histories) => {
    const result = calculateHistory(histories);
    res.status(200).json({
      gamePlayed:result.gamePlayed,
      totalWin:result.totalWin,
      totalLose:result.totalLose,
      totalDraw:result.totalDraw
    });
  })
  .catch((err) => {
    res.json({
      response: 500,
    });
    next(err);
  });
}

module.exports = {
  listGame,
  createGame,
  getUserHistories,
  getGameHistories,
  userStats,
  calculateHistory
};

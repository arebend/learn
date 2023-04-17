const {
   User
} = require("../models");

const createUser = (req, res, next) => {
   const {
      name,
      username
   } = req.body
   if (!name || !username) {
      res.sendStatus(400);
      return;
   }
   User.create(req.body)
      .then((res) => {
         res.status(200).json({
            success: true
         }) 
      }).catch((err) => {
         console.log(err);
         next(err);
      });
};

module.exports = {
   createUser
};
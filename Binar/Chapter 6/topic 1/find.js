const {
  Article
} = require('./models');
const {
  Op
} = require("Sequelize");
// Article.findAll().then(article => {console.log(article)});

// Article.findOne({
//   where: {
//     id: 3
//     // id :1 => Article muncul karena datanya ada di DB
//     // id :3 => null muncul karena datanya tidak ada di DB
//   }
// }).then(article => {
//   console.log(article)
// });

Article.findAll({
    where: {
      [Op.or]: [{id: "2"}, {id: "4"}]
    }
  })
  .then(article => {
    console.log(article)
  });

// console.log(Op);
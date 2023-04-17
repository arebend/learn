const {
  Article
} = require('./models');

Article.destroy({
  where: {
    id: 3
  }
}).then(article => {
  console.log(article)
});
const {
  Article
} = require('../models');

const findArticles = (req, res) => {
  Article.findAll().then(articles => {
    // res.status(200).json(articles);
    res.render('articles/index', {
      articles
      // lempar ke EJS kemudian di loop di EJS
    })
  });
};

const createArticleForm = (req, res) => {
  res.render('articles/create')
};

const findArticle = (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id
    }
  }).then(article => {
    // Karena hasil dari promise findOne adalah object,
    // Maka bisa kita lempar langsung ke method render
    res.render('articles/detail', {
      id: article.id,
      title: article.title,
      body: article.body
    })
  });
};

const createArticle = (req, res) => {
  const {
    title,
    body,
    approved
  } = req.body;

  if (!title || !body) {
    res.sendStatus(400);
    return
  }

  Article.create({
    title,
    body,
    approved
  }).then(article => {
    res.status(200).json(article);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  });
};

const updateArticle = (req, res) => {
  const {
    title,
    body,
    approved
  } = req.body;
  if(!title||!body){
    res.sendStatus(400);
    return
  }
  Article.create({
    title,body, approved
  }).then(article => {
    res.status(200).json(article);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  });
};

module.exports = {
  findArticles,
  findArticle,
  createArticleForm,
  createArticle,
  updateArticle,
}
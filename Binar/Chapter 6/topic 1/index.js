const express = require("express");
const app = express();
const port = 8080;

const {
  Article
} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// kirim nya menggunakan form biar bisa kebaca di body

app.set('view engine', 'ejs');

app.get('/articles', (req, res) => {
  Article.findAll()
    .then(article => {
      res.status(200).json(article);
    });
});

app.post('/articles', (req, res) => {
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
    })
    .then(article => {
      res.status(200).json(article);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    });
});

app.get('/articles/create', (req, res) => {
  res.render('create')
});

app.get('/articles/list', (req, res) => {
  Article.findAll()
    .then(articles => {
      res.render('list', {
        articles
        // lempar ke EJS kemudian di loop di EJS
      })
    });
});

app.get('/articles/:id', (req, res) => {
  Article.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(article => {
      // Karena hasil dari promise findOne adalah object,
      // Maka bisa kita lempar langsung ke method render
      res.render('detail', {
        id: article.id,
        title: article.title,
        body: article.body
      })
    });
});

// UPDATE BY ID
app.post('/articles/:id', (req, res) => {
  const title = req.body.title
  const body = req.body.body
  console.log(title, body);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
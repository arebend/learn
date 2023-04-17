const express = require('express');
const app = express();
const port = 8080;
const routerUser = require('./user');
const routerProduct = require('./product');
const morgan = require('morgan');
let posts = require('./dummy.json');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(morgan('combined'))
// const logger = (req, res, next) => {
//   console.log(`Form request ${req.method} ${req.url}`);
//   next();
// }

// app.use(logger);
app.use(express.json());

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(i => i.id === +req.params.id)
  // console.log('ini id post', post);
  res.status(200).json(post);
});


app.post('/posts', (req, res) => {
  const {
    title,
    body
  } = req.body;
  console.log(title, body);
  const id = posts[posts.length - 1].id + 1;
  const post = {
    id,
    title,
    body
  };

  posts.push(post);
  fs.writeFileSync("./dummy.json", JSON.stringify(posts));
  res.status(201).json(post);
});

app.put('/posts/:id', (req, res) => {
  const post = posts.find(i => i.id === +req.params.id);
  const params = {
    title: req.body.title,
    body: req.body.body
  };
  post = {
    ...post,
    ...params
  }
  post = posts.map(i => i.id === post.id ? post : i);
  fs.writeFileSync("./dummy.json", JSON.stringify(posts));
  res.status(200).json(post);
})

app.delete("/posts/:id", (req,res)=>{
  posts = posts.filter(post => post.id !== +req.params.id);
  fs.writeFileSync("./dummy.json", JSON.stringify(posts));
  res.sendStatus(200);
})




app.get('/view-engine', (req, res) => {
  const name = req.query.name;
  res.render('greet', {
    name
  });
});

app.get('/', (req, res) => {
  // console.log(req);
  res.send(`Hello World! ${req.query.name}`);
});

app.get('/hello', (req, res) => {
  res.sendFile(`/Users/aaronbenedict/Documents/Binar/Chapter 5/topic 3/express/hello.html`);
});

app.get('/index', (req, res) => {
  res.sendFile(`/Users/aaronbenedict/Documents/Binar/Chapter 5/topic 3/express/index.html`);
});


app.use(routerUser);
app.use(routerProduct);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: 'fail',
    message: 'Internal Server Error !'
  })
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
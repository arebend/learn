const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const fs = require('fs');

let users = require('./user.json');

app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(express.json());
const router = express.Router();
let currentUser = require('./user.json');
let x = false;

const isAuthenticated = (req, res, next) => {
  if (currentUser.username) {
    next();
  } else {
    req.sendStatus(401);
  }
};

router.use(isAuthenticated);

router.get("/hello", (req, res) => {
  const name = currentUser.name;
  res.render("greet", {
    name
  });
});


/* REGISTER */
app.post('/register', (req, res) => {

  const {
    username,
    password,
    name
  } = req.body;

  if (!username || !password || !name);

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    res.sendStatus(409);
    return;
  };

  const user = {
    username,
    password,
    name
  };

  users.push(user);

  fs.writeFileSync('./user.json', JSON.stringify(users))
});



/* LOGIN */
app.post('/login', (req, res) => {

  const {
    username,
    password
  } = req.body;

  const existingUser = users.find(user => user.username === username);

  if (!existingUser || existingUser.password !== password) {
    res.sendStatus(401);
    return;
  }

  res.status(200).json({
    name: existingUser.name,
  });

});



/* LOGOUT */
app.post('/logout', (req, res) => {

});



/* TEST */
app.get('/', (req, res) => {
  res.send(`Halaman Website`);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
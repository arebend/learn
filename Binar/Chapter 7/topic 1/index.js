const express = require("express");
const app = express();
const port = 8080;
const router = require('./router')

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// kirim nya menggunakan form biar bisa kebaca di body

app.set('view engine', 'ejs');
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
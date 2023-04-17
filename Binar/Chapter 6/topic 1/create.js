const {
  Article
} = require('./models');

Article.create({
    title: 'Hello World War z',
    body: 'Lorem Ipsum Dolor Sit Amet',
    approved: true
  }).then(article => {console.log(article)});
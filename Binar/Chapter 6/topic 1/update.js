const {
  Article
} = require('./models')



Article.create({
  title: 'Hello World',
  body: 'xxxx',
  approved: true
}, {
  where: {
    id: 1
  }
}).then(article => {
  console.log(article)
});

// const query = {
//   where: {
//     id: 1
//   }
// }

// Article.update({
//     title: 'Hello World',
//     body: 'xxxx',
//     approved: false
//   }, query)
//   .then(() => {
//     console.log("Artikel berhasil diupdate")
//     process.exit()
//   })
//   .catch(err => {
//     console.error("Gagal mengupdate artikel!")
//   })




const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
  console.log(req.body);
  res.json({
    name: req.query.name,
    age: req.query.age
  });
});

router.get('/users', (req, res) => {
  res.json({
    result: 'ini get user'
  })
})

module.exports = router;
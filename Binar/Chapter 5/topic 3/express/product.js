const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
  // console.log(req.query);

  let result = []

  res.json({
    name: req.query.name,
    price: req.query.price,
    description: req.query.description
  });

  result.push({
    name: req.query.name,
    price: req.query.price,
    description: req.query.description
  })
  console.log(result);
});

router.get('/products', (req, res) => {
  res.json({
    result: result
  })
})

module.exports = router;
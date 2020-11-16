const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/index2', (req, res) => {
  res.render('index2');
});


module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  const phrase = req.body.phrase;
  res.json(phrase);
});

module.exports = router;

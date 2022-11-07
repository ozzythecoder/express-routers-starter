const express = require('express')
const router = express.Router();

const bookList = [];

// already listening at /book !!
router.get('/', (req, res) => { res.send(bookList) });

router.post('/', (req, res) => {
  bookList.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
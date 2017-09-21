let express = require('express');
let router = express.Router();

router.post('/', function (req, res) {
  console.log("inisde node api");
})



module.exports = router;

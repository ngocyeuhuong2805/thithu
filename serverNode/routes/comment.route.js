var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/comic.controller');

router.get('/',ctrl.getData);
router.post('/',ctrl.addComic);

module.exports = router;
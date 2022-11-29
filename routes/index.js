var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController')
var lessonController = require('../controllers/lesonController')
var Account = require('../models/Account')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

// router.get('/user/:id', accountController.renderHomepage);

router.post('/register', accountController.registerAccount);

router.post('/login', accountController.loginAccount);

// router.get('/user/:id', accountController.renderHomepage);


router.get('/update', function(req, res, next) {
  res.render('update');
});


module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('auth/index', { title: 'User Authentication' });
});
//non-API endpoint for logging out of a session
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/auth');
  });
  
module.exports = router;
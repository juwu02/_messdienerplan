const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
router.get('/impressum', forwardAuthenticated, (req, res) => res.render('impressum'));

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

/*router.get('/plan', ensureAuthenticated, (req, res) =>
  res.render('plan', {
    user: req.user
  })
);*/

module.exports = router;
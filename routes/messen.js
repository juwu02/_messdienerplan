const express = require('express');
const router = express.Router();
const passport = require('passport');

const Messdiener = require('../models/Messen');
const { ensureAuthenticated } = require('../config/auth');

router.get('/plan', ensureAuthenticated, (req, res) => res.render('plan'));
router.get('/table', ensureAuthenticated, (req, res) => res.render('table'));


router.post('/plan', (req, res) => {
  const { name, messe1, messe2, messe3, messe4 } = req.body;
  let errors = [];

  if (!name || !messe1 || !!messe2 || !!messe3 || !!messe4) {
    errors.push({ msg: 'Bitte alle Felder ausfüllen' });
  }

  const newMessdiener = new Messdiener({
    name,
    messe1,
    messe2,
    messe3,
    messe4
  });
  newMessdiener
    .save()
    .then(messdiener => {
      req.flash(
        'success_msg',
        'Deine Anfrage wurde erfolgreich gespeichert'
      );
      res.redirect('/dashboard');
    })
    .catch(err => console.log(err));
});

router.post('/plan', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

module.exports = router;
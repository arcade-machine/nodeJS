const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const name = {name: "Kappa", age: "200", comeFact: "yes"};
  // res.json(name);
  // res.send('Hey! It works!');

  //If u wanna get smthn from url, use this:
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('main', {
    name: "Sergei",
    dog: "No dog :(",
    randomStatement: req.query.statement,
    title: "I am node developer"
  });
});

router.get('/reverse/:name', ((req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
}));

module.exports = router;

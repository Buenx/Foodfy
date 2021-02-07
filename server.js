const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk');

nunjucks.configure('views', {
  express: app,
  autoescape: false,
  noCache: true,
});

app.get('/recipes/:index', function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];

  console.log(recipes[recipeIndex]);
  return res.render('recipe', { items: recipe });
});

app.get('/', function (req, res) {
  return res.render('home', { recipes });
});

app.get('/receitas', function (req, res) {
  return res.render('recipes', { recipes });
});

app.get('/sobre', function (req, res) {
  return res.render('about');
});

app.listen(5000, function () {
  console.log('server is on');
});

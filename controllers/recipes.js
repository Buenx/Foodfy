const data = require('../data.json');

exports.home = function (req, res) {
  return res.render('home', { recipes: data.recipes });
};

exports.recipesPage = function (req, res) {
  return res.render('recipes', { recipes: data.recipes });
};

exports.recipesIndex = function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = data.recipes[recipeIndex];

  return res.render('recipe', { items: recipe });
};

exports.about = function (req, res) {
  return res.render('about');
};
const data = require('../data.json');

exports.home = function (req, res) {
  return res.render('user/home', { recipes: data.recipes });
};

exports.recipesPage = function (req, res) {
  return res.render('user/recipes', { recipes: data.recipes });
};

exports.recipesIndex = function (req, res) {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Receita não encontrada');

  const recipe = {
    ...foundRecipe,
  };

  return res.render('user/recipe', { recipes: recipe });
};

exports.about = function (req, res) {
  return res.render('user/about');
};

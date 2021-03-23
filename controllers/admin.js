const fs = require('fs');
const data = require('../data.json');

exports.create = function (req, res) {
  return res.render('admin/create');
};

exports.index = function (req, res) {
  return res.render('admin/panel', { recipes: data.recipes });
};

exports.show = function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = data.recipes[recipeIndex];

  return res.render('admin/show', { items: recipe });
};

exports.edit = function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = data.recipes[recipeIndex];

  return res.render('admin/edit', { items: recipe });
};

exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send(`Please, fill the ${key}`);
    }
  }

  data.recipes.push(req.body);

  // fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
  //   if (err) return res.send('Write file error!');
  //   return res.redirect(`instructors/${id}`);
  // });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write file erro!');
    return res.redirect('/admin/recipes');
  });
};

const express = require('express');
const routes = express.Router();
const recipes = require('./controllers/recipes');
const admin = require('./controllers/admin');

routes.get('/admin/recipes', admin.index); // Mostra a lista de receitas
routes.get('/admin/recipes/create', admin.create); // Mostrar formulário de nova receita
routes.get('/admin/recipes/:index', admin.show); // Exibir detalhes de uma receita
routes.get('/admin/recipes/:index/edit', admin.edit); // Mostrar formulário de edição de receita

routes.post('/admin/recipes', admin.post); // Cadastrar nova receita
// routes.put('/admin/recipes', recipes.put); // Editar uma receita
// routes.delete('/admin/recipes', recipes.delete); // Deletar uma receita

routes.get('/recipes/:index', recipes.recipesIndex);
routes.get('/', recipes.home);
routes.get('/receitas', recipes.recipesPage);
routes.get('/sobre', recipes.about);

module.exports = routes;

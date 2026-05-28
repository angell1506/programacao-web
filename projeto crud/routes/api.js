//Lógica do backend - CRUD
const expess = require('express');

//modularizar as rotas
const routes = expess.routes();

const db = require('../db'); //conectando ao banco de dados

//CRUD
//create - post (sql: insert)
//read - get (sql: select)
//update - put (sql: update)
// delete - delete (sql: delete)
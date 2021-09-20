const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

/* GET home page. */
router.get('/produto', function(req, res, next) {

  const lista = controller.vendasProduto()


  res.render('index', { title: 'Dashboard - Vendas Por Produto' , lista });
});

router.get('/data', function(req, res, next) {

  const listaData = controller.vendasData()


  res.render('data', { title: 'Dashboard - Vendas Por Data' , listaData });
});

router.get('/tipo', function(req, res, next) {

  const listaTipo = controller.vendasTipo()


  res.render('tipo', { title: 'Dashboard - Vendas Por Tipo' , listaTipo });
});


module.exports = router;

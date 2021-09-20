const productModel = require("../models/model");

exports.vendasProduto = () => productModel.vendasProduto();

exports.vendasData = () => productModel.vendasData();

exports.vendasTipo = () => productModel.vendasTipo();
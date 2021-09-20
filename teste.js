const invoices = require("../data/invoices.json");
const products = require("../data/products.json");



let arrayMapeado = invoices.map((valor, index, elements) => {
    let proximo = elements[index + 1]; // pega o proximo valor da iteração, elements é o array passado no map
    let atual = valor;
    
    if(!proximo) {
      return false; // gera um entrada false, que iremos tratar depois
    }
    
    // Verifica se há scores iguais
  
    if(atual.produto === proximo.produto) {
      let quantidadeAtual = atual.quant;
      let quantidadeProximo = proximo.quant;
      quantidadeAtual = [quantidadeAtual, quantidadeProximo]; // monta o quantidade
      valor.quantidade = quantidadeAtual;
      elements.splice(index, 1); // Remove o elemento duplicado
      return valor;
    }
    valor.quantidade = [valor.quantidade] // tranforsma o userName em array, caso não tenha entrado no if
    return valor;
  });
  
  let arrayNormalizado = arrayMapeado.filter(produto => produto !== false) // retira o false
  
  console.log(arrayNormalizado);
  
  
  let result = [...new Set(invoices.map(x => x.produto))].map( x => {
    return{
        produto: x,
        quant : invoices.filter(d => d.produto == x).map( u => u.quant).reduce((acc, item)=> acc + item)
    }
  });
  
  
  
  
  console.log("result")
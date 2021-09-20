const invoices = require("../data/invoices.json");
const products = require("../data/products.json");

exports.vendasProduto = () => {
      
      const porProduto = [...new Set(invoices.map(x => x.product_id))].map( x => {
        return{
            product_id: x,
            quantity : invoices.filter(d => d.product_id == x).map( u => u.quantity).reduce((acc, item)=> acc + item)
        }
      }); 

      return JSON.stringify(porProduto)

};

exports.vendasData = () => {
          
      const porData = [...new Set(invoices.map(x => x.date))].map( x => {
        return{
            date: x,
            quantity : invoices.filter(d => d.date == x).map( u => u.quantity).reduce((acc, item)=> acc + item)
        }
      });
      
      return JSON.stringify(porData)
};

exports.vendasTipo = () => {

  const newData = invoices.map( prod =>{
    let novaLista = {
      "produto": prod.product_id,
      "quant": prod.quantity
    };
    
    return novaLista
  });  
  
  const newTipo = products.map( prod =>{
    let novaLista2 = {
      "produto": prod.id,
      "type": prod.type
    };
    
    return novaLista2
  });
  
  const newReport = newData.map((item,i)=> Object.assign({}, item, newTipo[i]));
  
  const resultType = [...new Set(newReport.map(x => x.type))].map( x => {
    return{
        Type: x,
        quantity : newReport.filter(d => d.type == x).map( u => u.quant).reduce((acc, item)=> acc + item)
    }
  }); 
  
  return JSON.stringify(resultType);

};




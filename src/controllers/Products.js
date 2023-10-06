const {productData} = require('../dbo/products_dbo');

 
const getParentProduct = async (req, resp) =>{
     try{
        let result = await productData.getParentProduct(req.query.category);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
}


const getProductByParentSku = async (req, resp) =>{
  try{
     let result = await productData.getProduct(req.query.sku);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}


const getStyle = async (req, resp) =>{
  try{
     let result = await productData.getStyle();
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}


const getFilter = async (req, resp) =>{
  try{
     let result = await productData.getFilter(req.query.parent_sku, req.query.color);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}

module.exports = {
    getParentProduct,
    getProductByParentSku,
    getStyle,
    getFilter
}
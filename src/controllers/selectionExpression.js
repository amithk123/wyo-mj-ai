const selExpDbo = require('../dbo/selection_expression_dbo').expressionData;

const getSelectionExpression = async (req, resp) =>{
     try{
        let result = await selExpDbo.getExpressionDataByThemeId(req.query.id);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}



module.exports = {
    getSelectionExpression
}
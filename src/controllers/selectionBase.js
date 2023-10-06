const selBaseDbo = require('../dbo/selection_base_dbo').baseData;

const getSelectionBase = async (req, resp) =>{
     try{
        let result = await selBaseDbo.getBaseDataByThemeId(req.query.id);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}



module.exports = {
    getSelectionBase
}
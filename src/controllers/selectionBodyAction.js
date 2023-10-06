const selExpDbo = require('../dbo/selection_body_action_dbo').bodyActionData;

const getSelectionBodyAction = async (req, resp) =>{
     try{
        let result = await selExpDbo.getBodyActionDataByThemeId(req.query.id);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}



module.exports = {
    getSelectionBodyAction
}
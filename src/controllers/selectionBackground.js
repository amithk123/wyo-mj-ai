const selBgDbo = require('../dbo/selection_background_dbo').backgroundData;

const getSelectionBackground = async (req, resp) =>{
     try{
        let result = await selBgDbo.getBackgroundDataByThemeId(req.query.id);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}



module.exports = {
    getSelectionBackground
}
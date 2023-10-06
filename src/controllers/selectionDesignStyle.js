const seldesignStlDbo = require('../dbo/selection_design_style_dbo').designStyleData;

const getSelectionDesignStyle = async (req, resp) =>{
     try{
        let result = await seldesignStlDbo.getDesignStyleDataByThemeId(req.query.id);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}



module.exports = {
    getSelectionDesignStyle
}
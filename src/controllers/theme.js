const {themeData} = require('../dbo/theme_dbo');

 
const getThemes = async (req, resp) =>{
     try{
        let result = await themeData.getThemes(req);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
}

// levels
const getThemesLevels = async (req, resp) =>{
  try{
     let result = await themeData.getThemeLevels(req.query.id);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}



module.exports = {
    getThemes,
    getThemesLevels
}
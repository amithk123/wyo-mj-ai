const {promptData} = require('../dbo/ThemeWithPromptDbo');

 
const getPrompt = async (req, resp) =>{
     try{
        let result = await promptData.getPrompt(req.query.theme);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
}


const getAllThemes = async (req, resp) =>{
  try{
     let result = await promptData.getThemes(req.query.print_type);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}

const getSuggestion = async (req, resp) =>{
  try{
     let result = await promptData.getSuggestionByTheme(req.query.theme);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}
 


module.exports = {
    getPrompt,
    getAllThemes,
    getSuggestion
}
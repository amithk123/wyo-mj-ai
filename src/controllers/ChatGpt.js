const {chatGPT} = require('../dbo/ChatGptDbo');

 
const generatePrompt = async (req, resp) =>{
     try{
        let result = await chatGPT.generateNewPrompts(req.query.promptInput);
        console.log('CP: ', result);
        //save into database
        let result2 = await chatGPT.saveNewPrompts(result[0].message.content);
        resp.status(200).send(result2);
     }catch(e){
       console.log('db error'+ e);
     }
}

 


module.exports = {
    generatePrompt
}
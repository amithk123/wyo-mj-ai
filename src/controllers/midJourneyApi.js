const config = require('../config/config');
const mjDbo = require('../dbo/midJourneyApi').MidjourneyBot;
const mjImg = require('../dbo/mjImages').mjImages;

var fs = require('fs');
var os = require("os");
var hostname = os.hostname();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




const ask = async (req, resp) => {

  try {
    let result = await mjDbo.ask(req.query.promptData);
    await sleep(15 * 1000);
    while (true) {
      let messages = await mjDbo.messages(1);
      let message = messages[0];
       
      console.log("content: ", mjDbo.content(message));
      console.log('Validate Image URL-----------------------------------------');
      
      await sleep(5 * 1000);
      const imageUrl2 = await mjDbo.get_image_url(message);
      let fileName ='12345'+req.query.currTime+'.webp';
      console.log(req.query.currTime)
      await mjDbo.save_image(imageUrl2, config.imgPath + fileName);
      if (await mjDbo.validate_image_url(message)) {
        break;
      }
    }

    //check prev status
   
      messages = await mjDbo.messages(1);
      message = messages[0];
      const imageUrl = await mjDbo.get_image_url(message);
      let fileName = Date.now() + Math.floor(100000 + Math.random() * 900000) + 'wyo.png';
      await mjDbo.save_image(imageUrl, config.imgPath + fileName);
      let insStatus = await mjImg.savePromptImageL1(fileName, 'initial');
      let message_id = await mjDbo.message_id(message);
      let message_hash = await mjDbo.message_hash(message);

       
      // convert binary data to base64 encoded string
      imgPath = __dirname+'../../../public/images/'+fileName;
      let imageAsBase64 = fs.readFileSync(imgPath, 'base64');
      //save for recent
      let recStatus = await mjImg.saveRecentPromptImage(req.query.promptData, fileName, message_id, message_hash);
      
      const data = {
        fileName: imageAsBase64,
        message_id: message_id,
        message_hash: message_hash
      }
      resp.status(200).send(data);
  } catch (e) {
    console.log('error' + e);
  }

}

const upScale = async (req, resp) => {

  try {
    let result = await mjDbo.up_scale(req.query.index, req.query.message_id, req.query.message_hash);
    await sleep(20 * 1000);//in ms
    let messages = await mjDbo.messages(1);
    let message = messages[0];
    const imageUrl = await mjDbo.get_image_url(message);
    let fileName = Date.now() + Math.floor(100000 + Math.random() * 900000) + 'wyoupscale.png';
    await mjDbo.save_image(imageUrl, config.imgPath + fileName);

    await sleep(2 * 1000);//in ms
    let insStatus = await mjImg.savePromptImageL1(fileName, 'upscale');
    const data = {
      fileName: fileName
    }
    resp.status(200).send(data);
  } catch (e) {
    console.log('error' + e);
  }

}



// recent prompt image
const getRecentPromptImages = async (req, resp) =>{
  try{
     let result = await mjImg.getRecentPromptImage(req.query.userId);
      resp.status(200).send(result);
  }catch(e){
    console.log('db error'+ e);
  }
}

//get design
const getRecentImg = async (req, resp) => {
   
  path = __dirname+'../../../public/images/'+req.query.image;
  //resp.send('<img src="'+path+'" />');
  var imageAsBase64 = fs.readFileSync(path, 'base64');
  //resp.send(imageAsBase64)
  const data = {
    fileName: imageAsBase64,
    message_id: req.query.message_id,
    message_hash: req.query.message_hash,
  }
  resp.status(200).send(data);
}



module.exports = {
  ask,
  upScale,
  getRecentPromptImages,
  getRecentImg
}
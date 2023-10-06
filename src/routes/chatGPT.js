// this page handles all product related calls only

const router = require('express').Router();
const chatGptCtrl = require('../controllers/ChatGpt');
 

router.get('/', (req, resp)=>{
    resp.send('Access not allowed.');
})


router.get('/generatePrompts', chatGptCtrl.generatePrompt);


module.exports = router;

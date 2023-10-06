// this page handles MJ APIs calls only

const router = require('express').Router();
const mjCtrl = require('../controllers/midJourneyApi');
 
router.get('/', (req, resp)=>{
    resp.send('Access not allowed.');
});

router.get('/ask', mjCtrl.ask);
router.get('/upScale', mjCtrl.upScale);
router.get('/recentDesigns', mjCtrl.getRecentPromptImages)
router.get('/getRecentImg', mjCtrl.getRecentImg)

//router.get('/removeBg', mjCtrl.removeBg);



module.exports = router;
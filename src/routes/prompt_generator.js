const router = require('express').Router();
const promptCtrl = require('../controllers/ThemeWithPrompt');
// const selectionBaseCtrl = require('../controllers/selectionBase');
// const selectionExpCtrl = require('../controllers/selectionExpression');
// const selectionBgCtrl = require('../controllers/selectionBackground');
// const selectionDesignStlCtrl = require('../controllers/selectionDesignStyle');
// const selectionBodyActionCtrl = require('../controllers/selectionBodyAction');

router.get('/', (req, resp)=>{
    resp.send('Access not allowed.');
})

//delete all
// router.get('/all-themes',themeCtrl.getThemes);
// router.get('/levels-by-theme-id',themeCtrl.getThemesLevels);
// router.get('/base-by-theme-id',selectionBaseCtrl.getSelectionBase);
// router.get('/expression-by-theme-id',selectionExpCtrl.getSelectionExpression);
// router.get('/bodyaction-by-theme-id',selectionBodyActionCtrl.getSelectionBodyAction);
// router.get('/background-by-theme-id',selectionBgCtrl.getSelectionBackground);
// router.get('/designstyle-by-theme-id',selectionDesignStlCtrl.getSelectionDesignStyle);

//new
router.get('/get-prompt',promptCtrl.getPrompt);
router.get('/getThemes',promptCtrl.getAllThemes);
router.get('/getSuggestionByTheme',promptCtrl.getSuggestion);






module.exports = router;
const router = require('express').Router();
const userCtrl = require('../controllers/users');
 

router.get('/', (req, resp)=>{
    resp.send('Access not allowed.');
})

router.post('/register-user', userCtrl.saveUser);
router.post('/login-user', userCtrl.loginUser);
 



module.exports = router;
// this page handles all product related calls only

const router = require('express').Router();
const productCtrl = require('../controllers/Products');
 

router.get('/', (req, resp)=>{
    resp.send('Access not allowed.');
})

//router.get('/all-products', userCtrl.saveUser);
router.get('/get-parent-product-by-category', productCtrl.getParentProduct);
router.get('/getProductByParentSku', productCtrl.getProductByParentSku);
router.get('/getStyles', productCtrl.getStyle);
router.get('/getFilters', productCtrl.getFilter);


 



module.exports = router;
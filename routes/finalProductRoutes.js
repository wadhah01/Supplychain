const finalProductController = require ('../controllers/finalProductController');
const {Router} = require('express');
const router = Router();

router.post('/createFP', finalProductController.createFP);
router.get('/findFPrById/:id',finalProductController.findFPrById);
router.get('/findFPByType/:type',finalProductController.findFPByType);
router.get('/findFPAll',finalProductController.findFPAll);
router.delete('/deleteFPrById/:id',finalProductController.deleteFPrById);
router.put('/updateFPById/:id',finalProductController.updateFPById);

module.exports = router ;
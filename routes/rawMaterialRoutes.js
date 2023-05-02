const rawMaterialController = require ('../controllers/rawMaterialController');
const {Router} = require('express');
const router = Router();

router.post('/createRM', rawMaterialController.createRM);
router.get('/findRMrById/:id',rawMaterialController.findRMrById);
router.get('/findRMByType/:type',rawMaterialController.findRMByType);
router.get('/findRMByCreator/:creator',rawMaterialController.findRMByCreator);
router.get('/findRMAll',rawMaterialController.findRMAll);
router.delete('/deleteRMrById/:id',rawMaterialController.deleteRMrById);
router.put('/updateRMById/:id',rawMaterialController.updateRMById);

module.exports = router ;
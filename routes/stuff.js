const express = require('express');
const router = express.Router();
//Importer le controller
const stuffCtrl = require('../controllers/stuff');
//appel de la route du controller
router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id',stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/', stuffCtrl.getAllThings);
module.exports = router;
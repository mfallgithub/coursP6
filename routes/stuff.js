const express = require('express');
//importer notre middeware
const auth = require('../middleware/auth');
//Importer le controller
const stuffCtrl = require('../controllers/stuff');
const router = express.Router();

//appel de la route du controller
router.post('/', auth, stuffCtrl.createThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThings);
module.exports = router;
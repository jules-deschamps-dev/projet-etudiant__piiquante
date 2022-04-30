const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('multer');

const saucesCtrl = require('../controllers/sauces');

router.post('/', auth, multer, saucesCtrl.createSauce);

router.put('/:id', multer, auth, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getSauceById);
router.get('/', auth, saucesCtrl.getSauces);

module.exports = router;
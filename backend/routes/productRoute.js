const express = require('express');
const router = express.Router();

const {read, create, readOne, update, remove} = require('../controllers/productControllers');

router.get('/products', read);
router.post('/products/create', create);
router.get('/products/:productId', readOne);
router.put('/products/update/:productId', update);
router.delete('/products/remove/:productId', remove);

router.param('productId', productById);

module.exports = router;
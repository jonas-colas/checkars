const express = require('express');
const router = express.Router();

const {read, create, readOne, update} = require('../controllers/sellerControllers');

//router.get('/sellers', read);
router.post('/sellers/create', create);
//router.get('/sellers/:sellerId', readOne);
//router.put('/sellers/update/:productId', update);

//router.param('sellerId', sellerById);

module.exports = router;
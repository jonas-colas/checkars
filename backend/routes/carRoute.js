const express = require('express');
const router = express.Router();

const {list, create, readOne, update, remove} = require('../controllers/carController');
const {requireLogin, isAuth} = require('../controllers/authController'); //, isAuth
const {sellerById} = require('../controllers/sellerController'); //, isAuth

router.get('/cars', list);
router.post('/cars/create', requireLogin, create); //isAuth, 
router.get('/cars/:carId', readOne);
router.put('/cars/:carId', requireLogin, update); //isAuth, 
router.delete('/cars/:carId', requireLogin, isAuth, remove); 

router.param('sellerId', sellerById);

module.exports = router;
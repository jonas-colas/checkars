const express = require('express');
const router = express.Router();

const {list, create, readOne, update, remove} = require('../controllers/carControllers');
const {requireLogin} = require('../controllers/sellerControllers'); //, isAuth

router.get('/cars', list);
router.post('/cars/create', requireLogin, create); //isAuth, 
router.get('/cars/:carId', readOne);
router.put('/cars/:carId', requireLogin, update); //isAuth, 
router.delete('/cars/:carId', requireLogin, remove); //isAuth, 

module.exports = router;
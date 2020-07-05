const express = require('express');
const router = express.Router();

const {read, create, readOne, update, remove} = require('../controllers/autoControllers');

router.get('/autos', read);
router.post('/autos/create', create);
router.get('/autos/:autoId', readOne);
router.put('/autos/update/:autoId', update);
//router.delete('/autos/remove/:autoId', remove);

//router.param('autoId', autoById);

module.exports = router;
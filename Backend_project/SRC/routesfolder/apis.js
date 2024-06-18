const express = require('express');
const { body } = require('express-validator');
const dataController = require('../userControllers/controller');
const validationSchema = require('../validatorsfolder/validationSchema');

const router = express.Router();

router.get('/data', dataController.getAllData);

router.get('/data/:id', dataController.getDataById);

router.post('/data', validationSchema, dataController.createData);

router.put('/data/:id', validationSchema, dataController.updateData);

router.delete('/data/:id', dataController.deleteData);



module.exports = router;

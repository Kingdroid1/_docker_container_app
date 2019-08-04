const express = require('express');
const router = express.Router();

const empController = require('../controllers/employees');

router.post('/addEmp', empController.addEmployee);

router.get('/getEmployees', empController.getEmployees);

router.get('/getEmployee', empController.getEmployee);

router.get('/health', (req, res) => {
    res.send('OK');
  });
  
module.exports = router;
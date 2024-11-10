const express = require('express');
const router = express.Router();
const {
  getInspectors,
  getDetails,
  getBodyDetails,
  getOwnerDetails,
  getBrakes,
  getBumpers,
  getInterior,
} = require('../controller/vehicleController');  

router.get('/api/inspectors', getInspectors);   
router.get('/api/details', getDetails);         
router.get('/api/body', getBodyDetails);        
router.get('/api/owner', getOwnerDetails);      
router.get('/api/brakes', getBrakes);           
router.get('/api/bumpers', getBumpers);         
router.get('/api/interior', getInterior);       
module.exports = router;

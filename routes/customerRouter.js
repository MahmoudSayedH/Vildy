const express = require('express');
const {
  getAllCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');

const router = express.Router();

router.route('/').get(getAllCustomers).post(createCustomer);
router.route('/:id').get(getCustomer).patch(updateCustomer).delete(deleteCustomer);

module.exports = router;

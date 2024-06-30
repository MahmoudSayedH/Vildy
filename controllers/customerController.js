const Customer = require('../models/customerModel');
const getAllCustomers = async (req, res) => {
  //get all Customer from the database
  const customer = await Customer.find();
  //send response contain all Customer
  res.status(200).json({ status: 'success', data: { customer } });
};
const createCustomer = async (req, res) => {
  //create new Customer from the reqest body
  const newCustomer = await Customer.create(req.body);
  //send response of the new created Customer
  res.status(201).json({ status: 'success', data: { customer: newCustomer } });
};
const getCustomer = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //Search for id in the database
  const customer = await Customer.findById(id);
  // send response contains the data of the recived id
  res.status(200).json({ status: 'success', data: { customer } });
};
const updateCustomer = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  const newData = req.body;
  //find customer and update its value
  const customer = await Customer.findByIdAndUpdate(
    id,
    newData, //we can add this mongoose code here in the second argument:($set{}-$inc{}-->)
    {
      new: true, //get the new updated Customer
      runValidator: true, //run validation on the new inserted data
    }
  );
  //send a response of the updated Customer
  res.status(200).json({ status: 'success', data: { customer } });
};
const deleteCustomer = async (req, res) => {
  // get id from the request parameter
  const id = req.params.id;
  //find a data by id then delete from database
  await Customer.findByIdAndDelete(id);
  res.status(204).json({ status: 'success', data: { customer: null } });
};
module.exports = { getAllCustomers, createCustomer, getCustomer, updateCustomer, deleteCustomer };

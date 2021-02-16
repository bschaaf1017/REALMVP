const Budget = require('../models/budget');

exports.saveBudget = (budget) => {
  let store = new Budget(budget);
  return store.save();
}; 

exports.findAll = () => {
  return Budget.find();
};
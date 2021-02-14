const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
  name: String,
  income: Number,
  rent: Number,
  utils: Number,
  car: Number,
  other: Number
});
// {
//     income: '5000',
//     rent: '1000',
//     utils: '200',
//     car: '300',
//     other: '200'
//   }
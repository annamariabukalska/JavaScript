// Destructuring ES5/ES6

var expense = {
  type: 'Business',
  amount: '$45USD',
};

//ES5
//var type = expense.type;
//var amount = expense.type;

//ES6
const { type, amount } = expense;
type;
amount;

//Advanced Use of Arrow Function

const numbers = [1, 2, 3];

numbers.map(function (number) {
  return 2 * number;
});

//Example1 more compact

const numbers1 = [1, 2, 3];
numbers.map((number1) => 2 * number1); //2,4,6

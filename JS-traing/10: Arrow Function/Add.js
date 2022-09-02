const add = function (a, b) {
  return a + b;
};

add(1, 2);

//Example 1
const add1 = (a, b) => {
  return a + b;
};
add(1, 2);

//Example 2
const add2 = (a, b) => a + b;
add(1, 2);

//Example 3
const add3 = (a, b) => a + b;

const newSum3 = add(1, 2);
newSum;

//Example 4
const add4 = (a, b) => {
  return divideTheseThings(a + b / 10000000000);
};
const newSum4 = add(1, 2);
newSum;

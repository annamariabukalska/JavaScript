var numbers = [10, 20, 30];
var sum = 0;

//1
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

//2
numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

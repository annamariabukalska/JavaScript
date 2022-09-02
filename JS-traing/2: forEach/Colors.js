var colors = ['red', 'blue', 'green'];

// 1
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]); // det samme som når 2
}

// 2
colors.forEach(function (color) {
  console.log(color);
});

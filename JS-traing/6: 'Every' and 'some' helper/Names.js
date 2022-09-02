var names = ['Alexandria', 'Matthew', 'Joe'];

names.every(function (name) {
  return name.length > 4;
});

names.some(function (name) {
  return name.length > 4;
});

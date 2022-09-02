var computer = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

var allCompuetrsCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < compuetrs.length; i++) {
  var computer = compuetrs[i];

  if (computer.ram < 16) {
    allCompuetrsCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

('---');
allCompuetrsCanRunProgram;
onlySomeComputersCanRunProgram;

/** ram 24 = True
 *  ram 4 = False
 *  ram 32 = True
 *
 *  False && True && True  = False
 * */

computer.every(function (compuetrs) {
  return computer.ram > 16;
});

/*
 *  True || False || True = True
 */
compuetrs.some(function (computer) {
  return computer.ram > 16;
});

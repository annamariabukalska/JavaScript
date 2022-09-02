// A Touch More of Reduce

var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

//const newArray = primaryColors.map(color => color.color) lettere måte å skrive om nr1

//Eksempel
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var totalDistance = trips.reduce(function (
  previous,
  current //previous,current forrige, neste
) {
  //totalDistance.push(trips.distance); //[34,12,1]
  return previous + current.distance;
}, 0); // istedentfor 0 kan være hva som helst, 7, true, false

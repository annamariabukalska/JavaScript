function Car(model) {
  this.model = model;
}

var cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

cars.find(function (car) {
  return car.model === 'Focus';
});

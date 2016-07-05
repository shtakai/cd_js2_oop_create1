function VehicleConstructor(name, number, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.number = number;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function () {
    console.log('make noise');
  }

  return vehicle;

}

var bike = VehicleConstructor('motorcycle', 1234, 2, 2);
bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();

var sedan = VehicleConstructor('TOYOTA',3333, 4, 5);
sedan.makeNoise=function(){
   console.log('Honk Honk');
}
sedan.makeNoise();

var bus = VehicleConstructor('HINO', 4444, 20, 40);
bus.passengerCounter = function () {
  return this.passengers;
}
bus.makeNoise();
console.log(bus.passengerCounter());
console.log(bus);

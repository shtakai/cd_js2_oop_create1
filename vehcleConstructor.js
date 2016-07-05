function VehicleConstructor(name, number, wheels, passengers, speed) {

  var self = this;

  this.name = name;
  this.number = number;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this._distance_travelled = 0;

  this.vin = Math.floor(Math.random()*1000) + 1;



}

VehicleConstructor.prototype._updateDistanceTravelled = function(){
  this._distance_travelled += this.speed;
}

VehicleConstructor.prototype.makeNoise = function () {
  console.log('make noise');
}

VehicleConstructor.prototype.move = function(){
  this._updateDistanceTravelled();
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this._distance_travelled);
  return this;
}

VehicleConstructor.prototype.vin = function(){
   return this.vin;
}

var bike = new VehicleConstructor('motorcycle', 222,2,2,200);

bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();
bike.move().move();
bike.checkMiles();

bike.move().move();
bike.checkMiles();
bike.move().move();
bike.checkMiles();
var sedan = new VehicleConstructor('AE86 TOFU', 2992, 4,4, 120);
sedan.makeNoise = function(){
  console.log('Hong Hong');
}
sedan.makeNoise();
bike.makeNoise();

var bus = new VehicleConstructor('Bus', 3399, 16, 40, 60);
var bus2 = new VehicleConstructor('Bus', 3399, 16, 40, 60);
bus.pickUpPassengers = function(number_of_passengers){
   this.passengers += number_of_passengers;
}
bus.makeNoise();
console.log(bus.passengers);
bus.pickUpPassengers(10);
console.log(bus.passengers);
console.log(bike.passengers);

console.log('vin--------');
console.log(bike.vin);
console.log(sedan.vin);
console.log(bus.vin);
console.log(bus2.vin);

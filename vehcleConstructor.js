function VehicleConstructor(name, number, wheels, passengers) {

  var self = this;

  this.name = name;
  this.number = number;
  this.wheels = wheels;
  this.passengers = passengers;

  this.makeNoise = function () {
    console.log('make noise');
  }


}

var bike = new VehicleConstructor('motorcycle', 1234, 2, 2);
bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();

var sedan = new VehicleConstructor('TOYOTA',3333, 4, 5);
sedan.makeNoise=function(){
   console.log('Honk Honk');
}
sedan.makeNoise();

var bus = new VehicleConstructor ('HINO', 4444, 20, 40);
bus.pickUpPassengers = function(number){
  this.passengers += number;
}
bus.makeNoise();
//console.log(bus.passengers);
//console.log(bus);

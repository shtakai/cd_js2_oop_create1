function VehicleConstructor(name, number, wheels, passengers, speed) {

  var self = this;

  this.name = name;
  this.number = number;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  var distance_travelled = 0;

  this.makeNoise = function () {
    console.log('make noise');
    console.log(distance_travelled);
    console.log(speed);
  }

  var updateDistanceTravelled = function(){
    distance_travelled += speed;
  }

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles = function(){
       console.log(distance_travelled);
  }

}

var bike = new VehicleConstructor('motorcycle', 1234, 2, 2,100);
bike.makeNoise = function(){
  console.log('ring ring');
}
bike.makeNoise();
bike.move();
bike.move();
bike.move();
bike.checkMiles();

var sedan = new VehicleConstructor('TOYOTA',3333, 4, 5, 300);
sedan.makeNoise=function(){
   console.log('Honk Honk');
}
sedan.makeNoise();

var bus = new VehicleConstructor ('HINO', 4444, 20, 40, 500);
bus.pickUpPassengers = function(number){
  this.passengers += number;
}
bus.makeNoise();
console.log(bus.passengers);
console.log(bus)
bus.move();
bus.move();
bus.move();
bus.move();
bus.checkMiles();
console.log(bus)
bus.checkMiles();

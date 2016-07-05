class Vehicle {
  private distance_travelled: number
  name: string
  registered_number: number
  wheels: number
  passengers: number
  speed: number

  constructor(name, registered_number, wheels, passengers, speed){
    this.name = name
    this.registered_number = registered_number
    this.wheels = wheels
    this.passengers = passengers
    this.speed = speed
    this.distance_travelled = 0
  }

  makeNoise() {
     console.log('make noise')
     console.log(this.distance_travelled)
     console.log(this.speed)
  }

  private updateDistance(){
     this.distance_travelled += this.speed
  }

  move(){
     this.updateDistance()
  }

  checkMiles(){
     console.log(this.distance_travelled)
  }
}

let bike = new Vehicle('motorcycle',1234,2,2,100)
bike.makeNoise()
bike.makeNoise = () => {
   console.log('test')
}
console.log(bike)
bike.makeNoise()
bike.move()
bike.checkMiles()

let bus = new Vehicle('HINO',55555,20,400,300)
bus.makeNoise()
console.log(bus)
bus.makeNoise()
bus.move()
bus.checkMiles()

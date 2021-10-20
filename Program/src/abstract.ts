abstract class Vechile {
  abstract wheels: number;

  start(): void {
    console.log("Brummm");
  }
}

class Car extends Vechile {
  wheels: number = 4;
}

class Motorcycle extends Vechile {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();

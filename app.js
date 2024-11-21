class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, carStats) {
    super(doors, engine, color, carStats);
    this._brand = "No brand yet";
    this.wheels = 4;
    this.ac = true;
  }

  get getBrand() {
    return this._brand;
  }

  set setBrand(value) {
    this._brand = value;
  }

  myBrand() {
    return console.log(`This SUV is a ${this.brand}`);
  }
}

const audiA4 = new Car(4, "1.4l tfsi", "grey");
const fordFocus = new Car(4, "1l", "black");

const kiaSportage = new SUV(4, "2l", "white");

// test logging
console.log(audiA4);
console.log(audiA4.carStats());

console.log(fordFocus);
console.log(fordFocus.carStats());

console.log(Car.totalDoors(audiA4, fordFocus));

console.log(kiaSportage);
kiaSportage.myBrand();

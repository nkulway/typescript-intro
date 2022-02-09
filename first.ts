// let a = 5
// let b = 5
// let c = a + b

// console.log(c)

class Car {

  // fields  
    model: String;  
    doors: Number;  
    isElectric: Boolean;
  
  constructor(model: String, doors: Number, isElectric: Boolean) {  
      this.model = model;  
      this.doors = doors;  
      this.isElectric = isElectric;  
    }
  
  displayMake(): void {  
      console.log(`This car is ${this.model}`);  
    }
  
  }
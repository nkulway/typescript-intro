// let a = 5
// let b = 5
// let c = a + b
// console.log(c)
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model));
    };
    return Car;
}());

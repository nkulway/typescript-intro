"use strict";
// classes in ts are similar to interfaces however they
// are a lot more powerful 
//
// once again classes basically make up the blueprint of objects
// however classes are meant to be contructed or in other words
// to have new instances of the class created
//
// CLASS: SUPERCHARGED OBJECT BLUEPRINT (LOOSELY)
var Stark = /** @class */ (function () {
    // classes can have a constructor property which is a function when
    // the class runs
    function Stark() {
        // unlike members in an interface properties in a class
        // cannot be declared optional
        // they can however implement inferfaces w/ optional properties
        //
        // you can define a default property by putting an equals sign
        // after the property definition
        this.name = "Brandon";
        // this effectively gives it a default property
        this.saying = "Winterfell";
    }
    // METHOD
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = 'Winter is coming';
// console.log(Stark.castle)
ned.hello("Robert");
module.exports = {};

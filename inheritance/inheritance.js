"use strict";
// ---------------------------------------------------------------- //
// inheritance is a way for objects or classes to gain access
// to the properties of classes that are possessed by other objects 
// ---------------------------------------------------------------- //
// uses keyword 'extends'
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bran = new Person("Bran");
bran.dance();
// the 'extends' keyword means that this class will automaticall start with 
// all the properties of the class it extends
// so in this class we dont need to define the name or a constructor,
// if we dont want, or dance
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // going to override the dance function to make it a more
    // awesome dance
    AwesomePerson.prototype.dance = function () {
        console.log("SO AWESOME!");
        // to call the 'super'
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson("Robb");
robb.dance();
module.exports = {};
// in typescript when you override a function like this it doesnt 
// automatically call the function in the class that it extends
// this is called a "super function"

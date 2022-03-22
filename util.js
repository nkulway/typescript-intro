// ------------------------------------------------------------- //
// modules are a powerful way to share code b/w files. By using
// modules effectively you can keep your file size small and your
// dependencies clear.
// ------------------------------------------------------------- // 
//
// modules export classes.  Once a class is exported by a module it 
// can be accessed by any file that requires that module
// 
// ------------------------------------ //
// 1. have a method that does something
//
// function timesTwo(n:number){
//   return n * 2
// }
// ------------------------------------ //
// ------------------------------------ //
// 2. define the module
// module Utility {
//
//   function timesTwo(n:number){
//     return n * 2
//   }
//
// }
// ------------------------------------ //
// ------------------------------------ //
// 3. export class and change syntax of function
var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
///<reference path="timesTwo.ts" />
var use = new Utility.Useful();
console.log(use.timesTwo(9));


// using modules you can share code easily between files
"use strict";
// ------------------------------------------------------------- //
// modules are a powerful way to share code b/w files. By using
// modules effectively you can keep your file size small and your
// dependencies clear.
// ------------------------------------------------------------- // 
//
// modules export classes.  Once a class is exported by a module it 
// can be accessed by any file that requires that module
// 
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
module.exports = {};

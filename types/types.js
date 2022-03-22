"use strict";
// var n : Number = 1 // as opposed to String or any
// n = 'Rob'
var isWinter = false;
var count = 5;
var name = 'Bryn';
var names = ["John", "Rickon", "Arya"];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
var cat = Starks.Catlyn;
function getName() {
    console.log('Winter is coming!');
}

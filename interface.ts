// INTERFACE: A BLUEPRINT FOR AN OBJECT (LOOSELY)
//
// interfaces are another way typescript checks our 
// code for errors as its being compieled into javascript
//
// an interface is basically a definition for an object that 
// tells typescript what that object is going to be


export = {}

interface Stark {
  // parameters are required unless specified differently 
  name: string
  // in order to define a parameter as optional
  // place a ? after the name of the variable
  age?: number
}

function printName(stark : Stark) {
  console.log(stark.name)
}

printName({name: "Eddard"})
// initially ts will not print an error and will be compiled -- 
// once js runs the function, ({label: "Joe"}) will print as undefied
// which, alone, will prove difficult to troubleshoot on a large scale project
printName({name: "Joe"})


// define an interface to be a blueprint for the kind of obj we want
// to accept
//
// interfaces are a powerful tool to make javascript more reliable





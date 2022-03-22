// classes in ts are similar to interfaces however they
// are a lot more powerful 
// ------------------------------------------------------------
// once again classes basically make up the blueprint of objects
// however classes are meant to be contructed or in other words
// to have new instances of the class created
// ------------------------------------------------------------
// CLASS: SUPERCHARGED OBJECT BLUEPRINT (LOOSELY)

export = {}

class Stark {
  // unlike members in an interface properties in a class
  // cannot be declared optional
  // they can however implement inferfaces w/ optional properties
  // -----------------------------------------------------------
  // you can define a default property by putting an equals sign
  // after the property definition
  name: string = "Brandon"
  static castle: string = "Winterfell"
  saying: string

  // classes can have a constructor property which is a function when
  // the class runs

  constructor(){
    // this effectively gives it a default property
    this.saying = "Winterfell"
  }

  // METHOD
  hello(person:string){
    console.log("Hello, " + person)
  }
}

var ned = new Stark()
ned.saying = 'Winter is coming'
// console.log(Stark.castle)
ned.hello("Robert")


// ----------------------------------------------------------- //
// use classes to define the behavior of your objects in depth //
// ----------------------------------------------------------- //
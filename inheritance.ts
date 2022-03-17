// ---------------------------------------------------------------- //
// inheritance is a way for objects or classes to gain access
// to the properties of classes that are possessed by other objects 
// ---------------------------------------------------------------- //
// uses keyword 'extends'
//

export = {}

class Person {
  name: string
  constructor(name:string) {
    this.name = name
  }
  dance(){
    console.log(this.name + " is dancing")
  }
}

var bran = new Person("Bran")
bran.dance()

// the 'extends' keyword means that this class will automaticall start with 
// all the properties of the class it extends
// so in this class we dont need to define the name or a constructor,
// if we dont want, or dance
class AwesomePerson extends Person {
  // going to override the dance function to make it a more
  // awesome dance
  dance() {
    console.log("SO AWESOME!")
    // to call the 'super'
    super.dance()
  }
}

var robb = new AwesomePerson("Robb")
robb.dance()

// in typescript when you override a function like this it doesnt 
// automatically call the function in the class that it extends
// this is called a "super function"
//
// you can use supers and extending to create a large
// series of classes that are very effective
//
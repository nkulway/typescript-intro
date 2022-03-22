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
export = {}


 module Utility {

  export class Useful {
    timesTwo(n:number){
      return n * 2
    }
  }

 }
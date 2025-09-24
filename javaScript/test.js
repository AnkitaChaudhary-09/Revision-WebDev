console.log("Ankita")
"use strict"; // treat all JS code as new version
//alert(3+3) // usong nodejs not browser

let score =null
console.log(typeof score);
console.log(typeof(score));
let val =Number(score);
console.log(typeof val);
console.log( val);
//"33"=> 33
//"33abc"=> NaN(not a number)
//true=>1

// 1=> true, 0=> false
//"" => false
// ank => true


////  Data Types

//Primitive 
// 7types : String, Number, Boolean, null(typeof (object)), undefined, Symbol, BigInt

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId); //false

//Non-primitive (Reference)  ==========(type of :object)
// Array,Objects, Functions
const ar= ["ashs","dev","naar","dog"]

let myObj={
    name:"cutu",
    age :22,
    place:Mhrt
}
const myArr=function(){
  console.log("Hello Mypanda");
}


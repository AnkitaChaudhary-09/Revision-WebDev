// function addition(n1,n2){
//     console.log(n1+n2);
// }

// const result =addition(3,5);
// console.log("Result:",result);


function addition(n1,n2){
   let result =n1+n2;
   return result;
}


console.log("Result:",addition(3,5));

function calCartPrice(...num1){
    return num1;
}
console.log(calCartPrice(200,400,567,889))

const user={
    name:"bachhha",
    price:200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and prices is${anyobject.price}`);
    
}
handleObject(user)
//we can also pass the array like function


//scope:{}
let a=10;//block , unmodified
const b=90;//block , modified
var c=45;// global scope, modified
console.log(a);
console.log(b);
console.log(c);

{

}


//nested scope 
function one(){
    const name="panda"
    function two(){
        const web="insta"
        console.log(name);
        
    }
    //console.log(web);
     two()
}
one()

if(true){
    const name="panda"
    if(name ==="panda"){
        const web ="insta"
        console.log(name+web);
        
    }
    //console.log(web);
    
}
//console.log(name);

//++++++++++++interesting+++++++++++++


function disp(value){
return value+1
}
console.log(disp(5));

//+++Arrow Function & this

const user2={
    name:"bachhha",
    price:200,
    welcome:function(){
        console.log(`${this.name}, welcome to website`);
        //console.log(this);
        
    }
}
// user2.welcome()
// user2.name="cutu"
// user2.welcome()

//console.log(this);//empty object

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai= function(){
//     let username= "betuuu"
//     console.log(this.username);
    
// }

// const chai=()=>{
//     let username= "betuuu"
//     console.log(this);
    
// }
// chai()

// const add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(4,6));

const add=(n1,n2)=> (n1+n2)
//paranthesis m return krna pdega but curly braces m retun likhna pdega
console.log(add(4,6));

//IIFE: immediately Invoked Function Expressions

// function Chai(){
//     console.log(`Connected`)
// }
// Chai()


(function Chai(){
    //name IIFE
    console.log(`Connected`)
})();

(()=>{
    //without Name IIFE
    console.log("connect two");
    
})();


((name)=>{
    //parameter passed here
    console.log(`connect two ${name}`);
    
})("sweetu")

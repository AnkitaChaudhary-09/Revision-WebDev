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
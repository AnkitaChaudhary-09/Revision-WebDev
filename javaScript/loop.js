// for of
//["","",""]

const arr =[1,2,3,4,5,6]
// for (const i of arr) {
//     console.log(i);
// }

// const greet ="hello JS world"
// for(const str of greet){
//     console.log(`each char is ${str}`);
    
// }
// //maps
// const map =new Map()
// map.set('IN','India');
// map.set('USA','United state of America')

// for (const [key, value] of map) {
//     console.log(key, value);
    
// }
// const myObj={
//     1: "India",
//     2:"paris",
// // for of cannot work on it  
// }
//for in loop
//array keys start with 0 and these are number
// for (const key in arr) {
//     console.log(arr[key]); 
// }

const coding =["js","java","c","py","c++"]
// coding.forEach(function (i) {
//     console.log(i);
// })
// coding.forEach((item)=>{
// console.log(item);

// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

// reduce 

const nums =[1,2,3]
// const total =nums.reduce(function(acc, currentVal){
//      console.log(acc,currentVal);
     
//     return acc+currentVal;
// },0)
// console.log(total);


const total =nums.reduce((acc, currentVal)=> acc+currentVal
,0)
console.log(total);

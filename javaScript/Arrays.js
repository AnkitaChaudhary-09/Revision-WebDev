// these are resizeable and contain a mix datatypes.
const arr =[1,2,3,4,"hlo"]
console.log(arr.length);
console.log(arr[4]);
const arr2 =new Array(1,9,3,4,"hey")
console.log(arr2[4]);
// Array's function
const myarr=[1,2,3,4,5,6,8,9];
// myarr.push(34);// add element in the end of the array 
// console.log(myarr);
// myarr.pop();//pop the last element of the array 
// console.log(myarr);
// myarr.unshift(0);// add the element in the 0th index and shift the rest of all
// console.log(myarr);
// myarr.shift()//shift the element towards left means take the first element and delete and again you perform this ,dlt the 2nd one 
// console.log(myarr);
// console.log(myarr.includes(10));//false
// console.log(myarr.indexOf(10));//-1 not exit

// const NewArr =myarr.join()
// console.log(myarr);//array
// console.log(NewArr);//string

//++++++++slice & splice+++++++++++
//in slice method we give the range like (1,4)in this case,4is not included.it takes 1,2,3only
//in splice it includes and the part splice is cut out in the OG array.

// console.log("A",myarr);
// const mya1=myarr.slice(0,4)
// console.log("B",mya1);
// console.log(myarr);

// const mya2=myarr.splice(0,4)
// console.log("C",mya2);
// console.log(myarr);


//spread operator for combining
const allArr= [...arr,...arr2]
console.log(allArr);
//.flat(infinity) this method used in solved the array under array:[1,2[3,4,[5,6],7],8,20]
console.log(Array.from("Cutu panda"));// convert this in array
console.log(Array.from({name:"amkita"}))//empty
let score1=100
let score2=100
let score3=100
console.log(Array.of(score1,score2,score3));//array of all score



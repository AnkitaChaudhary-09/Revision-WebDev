let my_date =new Date()
console.log(my_date);//2025-09-28T18:46:25.135Z
console.log(my_date.toDateString());//Sun Sep 28 2025
console.log(my_date.toString());//Sun Sep 28 2025 18:48:55 GMT+0000 (Coordinated Universal Time)
console.log(my_date.toISOString());//2025-09-28T18:48:55.246Z
console.log(my_date.toJSON());//2025-09-28T18:48:55.246Z
console.log(my_date.toLocaleDateString());//9/28/2025
console.log(my_date.toLocaleString());//9/28/2025, 6:48:55 PM
console.log(my_date.toLocaleTimeString());//6:48:55 PM
console.log(my_date.toTimeString());//18:48:55 GMT+0000 (Coordinated Universal Time)
console.log(typeof my_date);
let bdDate =new Date(2003,9,9)
console.log(bdDate.toDateString());//months start with 0 in JS
let bdDateMe =new Date("2005-05-29")//months start with 1 here.
console.log(bdDateMe.toLocaleString());

let mytime =Date.now()
console.log(my_date);
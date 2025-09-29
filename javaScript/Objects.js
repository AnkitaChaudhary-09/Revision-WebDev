//Singleton
//Object.create :- singleton object

//object literals: keys and values


const mysyb =Symbol("key1")


const Juser ={
    name: "Ankita",
    "full name":"Ankita Chaudhary",
    [mysyb]:"mykey1",
    age:"20",
    place:"Agra",
    email:"ankita@google.com"
}
console.log(Juser.email);
console.log(Juser["email"]);
console.log(Juser["full name"]);
console.log(Juser[mysyb])
//changes
Juser.place="Noida"
//Object.freeze(Juser)// locked :no change 
console.log(Juser);

Juser.greeting =function(){
    console.log("Hlo Js User");
}

Juser.greetingtwo =function(){
    console.log(`Hlo Js User:${Juser.name}`);
}
console.log(Juser.greetingtwo());


//by constructor call

//const tinuser=new Object()//singleton obj
const tinuser1={}// non-singleton obj
tinuser1.id="123"
tinuser1.name="samp"
console.log(tinuser1);

const obj1 ={1:"a",2:"b",3:"c"}
const obj2={3:"c",4:"d"}
//const obj3 ={obj1,obj2}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));


// basics of destructing of Objects
const course ={
    name:"math",
    price:"999",
    corseTeacher:"cutu",

}
const {corseTeacher:teacher}=course
console.log(teacher);

//json
// {
//     "name":"ankita",
//     "courseName":"js",
//     "price":"free"
// }
[
    {},
    {},
    {}
]

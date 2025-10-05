const prom1= new Promise(function(resolve,reject){
//do an async task
//DB calls,n/w
 setTimeout(function () {
    console.log('Async task is complete');
    resolve()
 },1000)
})
prom1.then(function(){
    console.log('promise consumed');
    
})

new Promise(function (resolve,reject) {
    setTimeout(function(){
   console.log("async task 2");
   resolve()
},1000)
}).then(()=>{
    console.log("asyn 2 resolved");
    
})


const prom3= new Promise(function (resolve,reject) {
    setTimeout(function(){
   console.log("async task 3");
   resolve({user:"anki",email:"anki@google.com"})
},1000)
}).then((user)=>{
    console.log("asyn 3 resolved",user);
    
})


const prom4= new Promise(function (resolve,reject) {
    setTimeout(function(){
   console.log("async task 4");
   let error= false;
   if(!error){
    resolve({username:'cutu',pass:'123'})
   }else{
    reject('ERROR:Something went Wrong!')
   }

},1000)
}).then((user)=>{
    console.log("asyn 4 resolved",user);
    return user.username
    
}).then((username)=>{
console.log(username);

}).catch((error)=>{
    console.log(error);

}).finally(()=>console.log("the promise is either rejected or resolved")
)



const prom5 =new Promise(function (resolve,reject) {
    setTimeout(function(){
console.log("async task 5");
   let error=true;
   if(!error){
    resolve({username:'cutu',pass:'123'})
   }else{
    reject('ERROR:Something went Wrong!')
   }

},1000)
})//.then(()=>{
//     console.log("asyn 2 resolved");
    
// })
async function consume(){
    try {
        const res =await prom5
        console.log(res);
    } catch (error) {
        console.log(error);
        
    }
    
}
consume()

const name="Ankita"
const count =50
//console.log(name+count);
console.log(`hello my name is:${name} and i have money around ${count} crore`);
 const game= new String('Football')
 console.log(game[0]+""+game[1]);
 console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(6));
console.log(game.indexOf('b'));
const url ="https://ankita.com/ankita%20chaudhary"
console.log(url.replace('%20','-'));
// NUMBER//
 const balance = new Number(100)
 console.log(balance.toFixed(1));//100.0

 const hund =10000000
 console.log(hund.toLocaleString());//10,000,000
 console.log(hund.toLocaleString('en-IN'));//1,00,00,000

 //+++++++++++Maths+++++++++++++++++
 console.log(Math);
 console.log(Math.abs(-5));
 console.log(Math.round(6.5));//7
 console.log(Math.ceil(7.3));//8
 console.log(Math.floor(9.9));//9
console.log(Math.min(2,3,4,1));
console.log(Math.max(6,7,8,10,11));
console.log(Math.random());// value btw 0&1
//console.log(Math.random()*10);// shift one value towards left
console.log((Math.random()*10)+1);// avoid 0 value we used +1
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

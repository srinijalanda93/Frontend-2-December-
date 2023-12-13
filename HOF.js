// console.log("hello world !");
//Name Function 
function fun (){
    console.log("Named Function without argument");
}
fun(); //function call

// function fun1 (a,b,c){
//     console.log(a,b,c);
// }
// fun1(12,3); //function call =>return undefinec

// function fun1 (a,b,c){
//     //console.log(a,b,c);
//     return a+b-c;
// }
// let a=fun1(12,3); //c=>undefined a=NAN(not a number)
// console.log(a);

let b=function(a,b){
    console.log("Anonymous function!");
    return a+b;
}
console.log(b(1,2));

//Arrow function 
// let c=(a,b,c) =>{
//     console.log("Arrow function!");
//     return a+b*c;
// }
// console.log(c(1,2,3));

/**
 * trick if arraow function take only one argument omit the () round braces
 * and also if the arraow function using return keyword we can omit the  barces
 */
// let c=a => a*4;
// console.log(c(13));

// let c=(a)=>{
//     return a*4;
// }
// console.log(c(13)); // same 

//HOF and callback

function fName(cb){ //here fName =>HOF and f=>Callback
    console.log("Hof");
    cb(); //callback function
}
let f=()=>{
    console.log("call back function");
}
//calling the function;
fName(f);

//return an function we callit as HOF

// function callme(){
//    let cb= ()=>{
//         console.log("here callme also HOF as it is returning a function");
//         return "hello hof";
//     };
//     return cb();
// };
// let x=callme();
// console.log(x);

//HOF ON ARRAY

let arr=[3,4,5];
console.log(arr.length);
var cb=(e,i,list) =>{
   // console.log("srinija landa");
   console.log(e,i,list);
}
arr.forEach(cb);
let result=arr.forEach(cb);
console.log(result); //returns undefined

//Internal working of forEach
// function MyfroEach(cb){
//     cb(); //inside forEach it invokes the cb() to run
// }

//Program Sum of array using ForEach
let sum=0;
var cb=(e,i,list)=>{
    sum+=e;
}
arr.forEach(cb);
console.log(sum);


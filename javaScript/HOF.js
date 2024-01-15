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

// function fName(cb){ //here fName =>HOF and f=>Callback
//     console.log("Hof");
//     cb(); //callback function
// }
// let f=()=>{
//     console.log("call back function");
// }
// //calling the function;
// fName(f);

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

// let arr=[3,4,5];
// console.log(arr.length);
// var cb=(e,i,list) =>{
//    // console.log("srinija landa");
//    console.log(e,i,list);
// }
// arr.forEach(cb);
// let result=arr.forEach(cb);
// console.log(result); //returns undefined

//Internal working of forEach
// function MyfroEach(cb){
//     cb(); //inside forEach it invokes the cb() to run
// }

//Program Sum of array using ForEach
// let sum=0;
// var cb=(e,i,list)=>{
//     sum+=e;
// }
// arr.forEach(cb);
// console.log(sum);

//Map 
// var arr=[1,2,3,4,22,45,32,6];
// let cb=(e,i,l) =>{
//     console.log(e,i,l);
//    // return e%2==0? e*2 : e*5;  
// }
//let a=arr.map(cb); //here a is an array 
//console.log(a); //if  return not mentioned 'undefined' of same length;


// let cb1=(e,i,l) =>{
//     //console.log(e,i,l);
//    return e%2===0 ; //here it created an array [] where it takes the ele which are even numbers
// }
// let a1=arr.filter(cb1); //here a is an array 
// console.log(a1);

 var arr=[1,2,3,4,2,5,2,6];
 let count=0;
 let cb=(previous,curr_ele,index) =>{
    console.log(curr_ele);
    return previous+curr_ele;
 }
 let sum=arr.reduce(cb,0); 
 //inital value is not mentioned execution start at index 1 taking previous=arr[0];
 console.log(sum);

 let a=[23,true,5,6,"srinija"]
 //using keys
 for(let i in a){ //i datatype is string but works
    console.log(`index :${i} and element:${a[i]} its datatype ${typeof i}`)
 }

 //using values
 for(let j of a){
    console.log(`element :${j}  its datatype ${typeof j}`)
 }
 let student ={
    name:'srinija landa',
    single:true,
    age:21,
    study:'js',
    hobby:['eat','sleep','repeat'],
    quotes:"loveYourSelf"
 }

 for(let k in student){
    console.log(`keyName :${k} and its value:${student[k]} its datatype ${typeof student[k]}`)

 }
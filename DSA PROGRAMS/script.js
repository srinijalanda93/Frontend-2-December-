// console.log("hello world!");
//              a  b  p
//- for example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 etc.
//                 a  b   p

let a=0; let b=1;
console.log("PRINTING THE FIBONACCI SERIES:")
//console.log(a,b);
//let create an array and push them into it
let arr=[];
arr.push(a,b);
let prev=0;
for(i=0;i<5;i++){
    prev=a+b;
   // console.log(prev);
   arr.push(prev)
    //swap the numbers 
    a=b;
    b=prev;
}
console.log(arr);


    
    let a1= fibonacci(5);
    console.log(a1);
    
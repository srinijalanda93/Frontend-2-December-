//console.log("hello world!");
//Create An array
let arr=[1,"srinija",true,12.3,'king',undefined,20,677,()=>{console.log("function it's me ")}];
console.log(arr);

//->outofBound/negative index always gives the "undefined"
console.log(arr[-5]);
console.log(arr[20]);


//length property:fetch the number of elements in the array
console.log(arr.length);


//update the array at particular place
arr[4]='queen'; //from king ->queen
console.log(`the updated array ${arr}`);

//Accessing the last element from the array
console.log(arr[arr.length-1]);

//calling that function
arr[arr.length-1]();
let c=arr[arr.length-1]();
console.log(c); //return undefined as it is not returning anything

//Delete of Array:whole Array
//let arr1 = [1, "srinija", true, 12.3, 'king', undefined, 20, 677, () => { console.log("function") }];
// Using delete
//delete arr;
// delete arr1;
// console.log(arr1);

// 1.Add the Elements 
// a.At frist using unshift()//parameter mandatory*
// b.At last using push()//parameter mandatory*

arr.push(false,'Anand',"suga",1993);
console.log(arr);
arr.unshift([12,34,90],()=>{console.log("unshift demo")}); //array,fun

// 2.Delete the Element:always returns the deleted values (so need to store in the variables)
// a.At frist using shift()//NOparameter mandatory*
// b.At last using pop()//NOparameter mandatory*
// SYNTAX:let varName=arr.shift()
// SYNTAX:let varName=arr.pop()

let delElement=arr.pop();
console.log(delElement);

let del=arr.shift();
console.log(del);

//splice
// let s=arr.splice(1,3); //removing the elements
// console.log(s);

//let s=arr.splice(2); //remove all the elements at the end
//console.log(s);

//with deleting insert the elements
arr.splice(2,0,["hello",'world']);
console.log(arr);

//delete and add
arr.splice(2,1,'BTS','PINK VENOM',{1:'p',2:'o'});
console.log(arr);

//splice
let h=arr.splice(3,7);
console.log(h);









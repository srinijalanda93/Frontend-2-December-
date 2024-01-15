//console.log("hello world!");
//object
let obj={
    name:"landa srinija",
    age:21,
    studying:"Core Js",
    single:true,
    method:function(){
        console.log("i am inside the object");
    }
};

console.log(obj);

//accessing the values from the object
console.log(obj['age']); //using indexing
console.log(obj.method); //using dot
obj.method(); //print the function
//OutOfBound
console.log(obj.hello); //gives undefined

const cars = {
    ferrari: "california",
    porsche: "911",
    bugatti: "veyron",
  }
  
  // user input
  const key = "ferrari"
  console.log(cars.key);
  // undefined
  console.log(cars['key']);
  // undefined
  console.log(cars[key]); //here key is variable not key:value pair object thing.
  // california

//copy of obj
let copy=obj; //obj holds the id like 200 point to that data that 200 store in the copy variable
console.log(copy);
console.log(copy===obj);

source1={'q':1};
source2={'q':12};
let mergedObject = Object.assign({}, source1, source2);
console.log(mergedObject); //as 'q' key are same so it overwrite last source value

// Creating source objects
let source1 = { a: 1, b: 2 };
let source2 = { b: 3, c: 4 };

// Creating a target object
let target = { c: 5, d: 6 };

// Using Object.assign() to copy properties from sources to target
let result = Object.assign(target, source1, source2);

console.log(result);
// Output: { c: 4, d: 6, a: 1, b: 3 }

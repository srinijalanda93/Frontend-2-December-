// date :10/01/2024 DOM-2

/**
 * Element Properties
 * 1.built-attributes and cutom-attributes(get,setAttribute)
 * 2.style attributes
 * 3.classList
 *
 */
/**
 * custom attribute/data attributes
 * using of custom attribte it will have some additional information of that html element
 * alway suggested to use the "data-"  as prefix
 * using dot notation input.data-rollno here input-data is treated as one -rollno as one so finally
 * input.data gives undefined and -rollno through an error saying that rollno is undefined
 * SO ALWAY USE INDEXING FORMAT.
 * add the custom attribute to different "HTML ELEMENT" is allowed but repeating the custom-attribute in the HTML ELEMENT IS NOT ALLOWED
 *
 * Ex:<p data-info="red">Hello world </p>
 * <b data-info="red">srinija ananda </b>
 * in the above example giving the custom-attribute to different HTML ELEMENT IS allowed.
 *
 * ex:<p data-info="red" data-info="blue">Hello world </p>
 * the above is not good practice
 *
 */
/**
 * innerText,innerHTML,textContent
 * for innerHTML use backtricks ``;
 *
 *
 *
 */

/** TOPIC COVERED
 * nodeName,tagName are same
 * getAttribute() ,setAttribute("","");
 * getComputeedStyle() ->on window not on element
 * classList-->properties
 * innerText,innerHTML,innerContent
 */

//get the object from te dom tree

const input = document.querySelector(".container>#username");
/*
console.log(input);
console.log(input["id"]);
console.log(input["data-rollno"]); //using indexing format
console.log(input.type,input.id,input.namespaceURI,input.id,input.tagName,input.name);
console.log(input.nodeName);
**/

/** FOR CUSTOM ATTRIBUTES
 * getAttribute() get the custom attribute Value
 * setAttribute(key,newValue)  sets the custom attribute Value
 */

/**
 * getAttribute() is used for the custom-attribute to access the attributeValue(value)
 * getAttribute("Attribute") it takes the getAttribute("") string of "key/Attribute"
 */
// console.log(input.getAttribute("data-rollno")); //accessing the custom-attribute

//to set the value of the custom-attribute we use setAttribute("key", "newVaue") where it takes two arguments
// input.setAttribute("data-rollno","sfc-BSCH25"); // change the custom-attribute value
// console.log(input.getAttribute("data-rollno"));

/**
 * style attributes
 * object.style ->it gives the hug object with all the css properties and default values
 * using the style attribute we can change the style of the HTML element
 *
 * IN REAL WE ALWAY USE EXTERNAL CSS STYLE
 *
 */

// input.style.padding  -->''
//we are using the inline styling the input object it will gives the empty string
// object.style --->projected when we use the inline styling not for internal and external

// input.style.border="2px solid green";
// input.style.borderRadius="34px"; //always camelcase
// input.style.padding="20px";
// input.style.borderTopLeftRadius="1px";

/** FOR EXTERNAL CSS use the getComputedStyle();
 * getComputedStyle() it is a function used to get the final(actual) css style of the html element
 * getComputedStyle(HtmlObj) No quotes
 */

console.log(getComputedStyle);
//console.log('to know above the final style of the input:',getComputedStyle(input)); //loads the big object
/**
 * using getComputedStyle(object) loads the big object instead of loading huge object we cal use
 * getComputedStyle(object).padding (using the properties to gets the values)
 */
console.log(getComputedStyle(input).padding);
console.log(getComputedStyle(input).border);

/**
 * if we want to add the css to a HTML element we object.style
 */

const bold = document.querySelector("b");
/**
 * 
bold.style.border="3px solid blue";
bold.style.borderRadius="10px";
bold.style.fontSize="23px";
bold.style.fontStyle="italic";
 */

//add the 100 lines of css is not efficient instead of it
//add the className to that Html Element in that class add all the css

bold.className = "bold bg-color"; //which contains the css styles,//to add the multiple className

//removing the className to the HTML ELEMENT
// <b class=" bold bg-color ">Srinija Ananda</b>
/**
 * to remove the class from the html element we doing long length process
 * string mainpulation
 */

/**
 * let str="one two three four"; //className
let a=str.split(" ");
// console.log(a);
let cb=(element,index,list)=>{
    return element!=="three";
}
let updateClass=a.filter(cb);
console.log(updateClass);
let f=updateClass.join(" ");
console.log(f);

 */

/**
 * ClassList =>it is a property available on all the HTML element
 * classList are used to extract the classes from the HTML element(object).
 * it will gives in the form of an array.
 */
/**
 * to know the length of class holding by the HTML element we use
 * "object.classList.length"
 */
/**
 * classList property on the HTML element used for the className mainpulation easily
 * 1.contains("className") =>boolean (return where it has classes or not)
 * 2.add("newClassName","className1"...) =>used to add the NEW classNames to the HTML ELEMENTS
 * 3.remove(className1,"className2"...) =>removes an existing className from the classList
 * 4.toggle() =>toggles a className from the element
 */

console.log(bold.classList.contains("bg-color")); //return true
//add the new className "one","two","three"
console.log("one", "two", "three");
console.log(bold.claold.classList.add("ssList"));
//removing the bg-color
bold.classList.remove("bg-color");
console.log(bold.classList);
bold.classList.remove("one", "three");

/**
 * toggle() =>used in classList on the HTML element
 * if the class present it will remove
 * if the class is not present it will add like on and off
 */

//console.log(bold.classList.toggle("two"));
/**
 *bold.classList.toggle("two");--->false
 *bold.classList.toggle("two")--->true
 */
const container = document.getElementsByClassName("container")[0];
console.log(container);
console.log(container.innerText);
console.log(container.innerHTML);
console.log(container.textContent);

container.innerHTML = `
<p> lorem12</p>
<span>inner Html </span>
<b>sub-container</b>`;

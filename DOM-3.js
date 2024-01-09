/**
 * 1.Element properties:built-in,custom attribute
 * 2.DOM (CURD OPERATION) node from the DOM tree
 * 3.DOM event
 */
/**
 * First we need to extract the specific HTML element from the DOM tree  and store in the variable
 * as the HTML Element contains the varies attribute we can access
 * getAttribute :get the attribute value of customized attribute of HTML element
 * setAttribute:set the attribute means for modification
 * setAttribute(keyName,value) takes 2 parameter...
 */

/** 
const inputobj = document.querySelector("input"); //we we have multiple input it will gives the frist one only
console.log(inputobj.type,inputobj.id,inputobj.name);//html attributes inputobj["id"] can also use
console.log(inputobj.getAttribute("data-rollNo")) //for custom attribute we cann't use .,index formate so we use getAttribute("attribueName") it will the custom attribute
inputobj.type="password"; //change the value of type
console.log(inputobj);
inputobj.setAttribute("data-rollNo","srinija"); //change the value of custom attribute using the setAttribute
console.log(inputobj.getAttribute("data-rollNo")) 

//style is inbuilt 
console.log(inputobj.style.borderRadius); //in html we use border-radius but in js we need to use borderRadius (alway follows the camelCase)
inputobj.style.borderTopLeftRadius="5px"; //make topleft to 5px;
console.log(inputobj.style.borderTopLeftRadius)

const boldobj = document.querySelector("#onlytext + b");  //+ indicate immediate to input sibiling
console.log(boldobj);
**/

const inputobj = document.querySelector("input");
console.log(getComputedStyle) ;//window function present inside it
console.log(getComputedStyle(inputobj)) ;//=>gives huge objgive the finalised styles of an element.
console.log(getComputedStyle(inputobj.padding)) ;

 
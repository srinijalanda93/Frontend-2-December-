// DOM Queries DOM-1
/**
 * D= HTML document
 * O=javascript object
 * M=model
 * simple DOM representing the HTML document in the form of javascript objects
 * 
 * 
 * API means application programming Interface =>function| class|interface|objects that does some meaningful task
 * 
 * HTML document loads into the browser =>document API  =>objects 
 */
//revise the CSS SELECTOR PSEUDO SELECTOR...(+,~) +=>immediate next sibiling  ~ =>next sibiling of its match
/**
 * tagName
 * className
 * innerText
 * innerHtml
 */
/**
 * DIFFERENEC BETWEEN THE NODE AND ELEMENT
 * ELEMENT->always an HTML ELEMENT (OPEN,CLOSING TAG )
 * NODE-> may or may not be HTML element (text nodes)
 *  <div id="container-2">
         some text  
           <!--  here "some text" is an node not an HTML ELEMENT we call it as textNode -->
        <p>paragraph -1</p> even the P is also a node and HTML element
        
        <p>paragraph -2</p> even the P is also a node and HTML element
    </div> so here DIV is a node and html element
 */
/**
 * 1.Mainpulating the existing Html element in the dom Tree
 * 2.creating the new Html element and append to the dom tree
 * 3.Deleting the existing element from the Dom tree 
 * 4.Reading the html element from the Dom tree
 * to do all the CURD operation we need the OBJECT BTS Every HTML ELEMENT is in the form of the OBJECT in the memory 
 * So memory is most important 
 *
 * DOM QUERYING =>EXTRACTING THE HTML ELEMENT OBJECTS FROM THE DOM TREE
 *  FOUR WAYS OF EXTRACTING THE HTML ELEMENT OBJECTS
 * 1.document.getElementById("idName");
 * 2.document.getElementsByClassName('className'); -->HTMLCOLLECTION
 * 3.document.getElementsByTagName('tagName);  -->HTMLCOLLECTION
 * CSS SELECTOR
 * 4.docuement.querySelector('.className/#idname/pseduoelements');
 * 5.docuement.querySelectorAll('.className/#idname/pseduoelements'); --->NodeList
 * 
 */
//document=>is an web API that not part of JS  but available in the browser environment it knows everything about the DOM 
//using document(object) if we need any particular HTML element we use the above the properties

// let eleobj=document.getElementById("uname");
// console.log(eleobj); //it prints the HTMLelement in the console not in the object form

/** 
 * eleobj.type-->'text'
eleobj.name--->'username'
eleobj.id--->'uname'
eleobj.value--->'suga'
typeof eleobj--->'object'
eleobj.tagName--->'INPUT'
eleobj.tagName.toLowerCase()--->'input'
*/

/*giving same  "IDName" for the different Html elements 
=>won't through any error instead of it goes in a linear search manner
*once it found the HTML which holding idName it return the particular Html to us and don't care 
below the other elements have same idName or Not
**/


/*
let boldObj=document.getElementById("bold");
console.log(boldObj); //print the bold HTML
console.log(boldObj.className, boldObj.innerText  ,boldObj.tagName.toLowerCase());
*/

//give the idName which doesn't exist in the HTML ELEMENT =>DOESN'T through error it will the 'null values'
// let eobj=document.getElementById("sugaBTS");
// console.log(eobj); 
// console.log(typeof eobj);

//EXTRACTING THE CLASSNAME FROM THE DOM TREE


// let obj=document.getElementsByClassName("two");
// console.log(obj); //it give the 'HTMLCollection' of element it allows the indexing,length 
// //but don't support the HOF like forEach(),filter(),map();
// console.log(obj.length) //it gives the length of the HTMLCOLLECTIONS
// console.log(obj[0]) //gives the HTML Element
// console.log(obj[0].tagName) 
// console.log(obj[0].id) //it will gives the id of the element
// console.log(obj[0].innerText) //innerText of the HTML element 

//provide the class Name which doesn't existing the HTML element
//=>don't through the "error it give an empty HTMLCOLLECTION[]"

// let ele=document.getElementsByClassName("hello");
// console.log(ele);
// console.log(typeof ele);
// console.log(ele.length);

//EXTRACTING THE HTML ELEMENT USING THE tagName

let eleobj=document.getElementsByTagName("b");
console.log(eleobj[1].innerText)//it alway gives the HTMLcollection[]

//EXTARCTING THE HTML ELEMENT USING THE CSS SELECTORS (we can also use the pseduelement)
//here the QuerySlector gives only the one HTML ELEMENT even they are Multiples

let ele=document.querySelector('#container-2>p'); //extracting only one p tags inside the div
//console.log(ele);

//querySelectorAll it give the list of the thing which statisfies the given css selector
//as a "NodeList" indexing ,length can be used
let ele1=document.querySelectorAll('#container-2>p'); //extracting all the p tags inside the div
console.log(ele1);
//reading the 2nd paragraph innerText
console.log(ele1[1].innerText);

let ele2=document.querySelectorAll('p');
console.log(ele2);
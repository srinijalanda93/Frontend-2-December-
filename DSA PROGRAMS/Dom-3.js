//Date:11/01/2024

/**
 * DOM(CURD)
 * DOM EVENTS
 */
/**
 * Event means actions
 * listen the actions by the user
 * EvenListener:the Piece of javaScript code that get exceuted based on the user actions
 */
/**
 * click,scroll,bdclick,mouseover(hover),mouseenter,mouseleave,keydown,keyup,submitting a form,
 * input change,focus,blur,mousedown,mouseleave,dragstart,dragend,drop,resize...
 */

/**give teh muliple event of same Name to one HML element it will execute the first event only
 * and also any HTML ELEMENT can have same keys Name
 * <button onclick="onButtonClick()"
      onclick="console.log('other onclick')"
      >BUTTON</button>
      we consider it as drawBack
 */
/**
 * to cover the DRAWBACKs of onclick event or any other WAY where we can other "MULTIPLE EVENT" to the same HTML ELEMENT
 * STEP 1:extract the HTML element
 * STEP 2:extracted HTML element add the EventListener using HtmlElement.addEventListener()
 * syntax
 * "HTMLELEMENTOBJ.addEventListener(eventType,Listener Function(cb),false)" //by default
 * 3rd parameter =>false(default) -> cb event triggered in the bubbling phase
 *               =>true -> cb event triggered in the capturing phase
 * EVENT TYPE:don't contain "on" as prefix..
 */


/***
 * ATTENTION in the eventListener alway add the function or the function reference
 * function functionName(){
 * }
 * HTMLELEMENTOBJ.addEventListener(eventType,functionName)
 * here functionName is the reference
 */



const btn=document.getElementById("btn")
//adding eventListener
let cb=function(){
    const pTag=document.querySelector('.container > p');
    //pTag.innerText="st.Francis college for women";
    console.log("it is working on pTag frist eventLISTENER ");
    //let use the use the toggle properties of classList
   // pTag.classList.add('bold');
   pTag.classList.toggle("bold");
}
let cb1=function(){
    const spanTag=document.querySelector('.container > span');
    //pTag.innerText="st.Francis college for women";
    console.log("it is working on span tag 2nd event listener");
    //let use the use the toggle properties of classList
   // pTag.classList.add('bold');
   //spanTag.classList.toggle("bold");
   spanTag.style.fontSize="23px";
   spanTag.style.backgroundColor="pink";
}
btn.addEventListener("click",cb); //by default it goes in bubbling phase(false)
btn.addEventListener("click",cb1);
 

function onButtonClick(){
    // const con=document.querySelector('.container');
    // con.classList.toggle('srinija'); //onclick on it will add the style
    /**
     * onclick need to change the innertext of the paragraph
     */
    const pTag=document.querySelector('.container > p');
    //pTag.innerText="st.Francis college for women";
    console.log("it is working");
    //let use the use the toggle properties of classList
   // pTag.classList.add('bold');
   pTag.classList.toggle("bold");

}
// function onmouse(){
//     console.log("trigered");
// }
// function dbclick(){
//     console.log("on double click on the span tag");
// }
const btn1=document.getElementById("btn1")
let count=0;
const pobj=document.querySelector('.container2 > p')
let cb2=() =>{
    pobj.innerText=`${count} times`
    count++;
    console.log("yes the count is getting incrementing")
    if(count===5){
        console.log("the count is 5")
        pobj.innerText="the count is exceed"
        btn1.style.display='none';
    }
}
btn1.addEventListener("click",cb2)
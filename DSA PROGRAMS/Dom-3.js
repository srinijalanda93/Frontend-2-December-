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

function onButtonClick(){
    const con=document.querySelector('.container');
    con.classList.toggle('srinija'); //onclick on it will add the style
}
function onmouseenter(){
    const pobj=document.querySelector('.container2 p'); //pobj;
    //when the mouseenter change the css
    pobj.style.fontSize='20px';
    pobj.style.fontweight='bolder';
    pobj.style.fontStyle='italic';


}

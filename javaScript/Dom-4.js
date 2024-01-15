/**
 * 1.create a HTML Element
 * 2.append to existing HTML ELEMENT
 * 3.append(),appendChild(),insertBefore()
 * 4.document.body
 * 5.parentNode()
 * 
 */
/**
 * document.body is the object representing the <body> tag.
 * The topmost document node is document.documentElement.
 *  That’s the DOM node of the <html> tag.
 */
/**
 * document.body.childNodes.length 
 * run thr forLoop
 * document.body.childNodes.length[i]-->include #textnode(space,newline),tags,script
 * finaly display whole body.
 */

/** used to access the first and Lastchild of the body
 * elem=document.body.childNodes
 * elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
There’s also a special function elem.hasChildNodes() to check whether there are any child nodes.
 */
//Running this code will make the <body> pink for 3 seconds:
document.body.style.background = 'pink'; // make the background red
// document.body.innerHTML=`<h1HELLO WORLD </h1>`
// setTimeout(() => document.body.style.background = 'lightgreen', 3000); // return back

console.log(document.documentElement.parentElement)
                     //<html> don't have parent
console.log(document.documentElement.children)
console.log(document.documentElement.firstElementChild);
console.log(document.documentElement.lastElementChild);
//previousElementSibling, nextElementSibling.
console.log(document.documentElement.previousElementSibling);
console.log(document.documentElement.nextElementSibling);
/**
 * here the node of child or parent include the #text(space,newline),comment
 */
console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1],document.body.childNodes[2]);
console.log(document.body.children[0]);
// console.log(document.body.lastElementChild);
// console.log(document.body.children[1]);
// console.log(document.body.parentElement);//html
// console.log(document.body.parentNode); //html

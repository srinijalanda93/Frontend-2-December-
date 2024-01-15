//<script src="./javaScript/DomQuerying.js"></script>
/**
 * closest
 */
/**
 * Ancestors of an element are: parent,
 *  the parent of parent, its parent and so on.
 *  The ancestors together form the chain of parents from the element to the top.
 * =>obj.closest(css) looks its nearest ancestor
 * 
 * 
 * 
 */
const obj=document.getElementById("elem");
obj.style.backgroundColor='green';
obj.firstElementChild.style.backgroundColor='pink';

//querySelectorAll more versatile method
const obj1=document.querySelectorAll('ul> li:last-child')
for (let value of obj1) {
   console.log(value.innerHTML); // "test", "passed"
  }

  let chapterobj = document.querySelector('.chapter');
  console.log(chapterobj.closest('.book'));
  console.log(chapterobj.closest('.contents'));
  console.log(chapterobj.closest('h1'));
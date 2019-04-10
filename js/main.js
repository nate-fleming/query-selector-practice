console.log('hello');

const header = document.querySelector(".article__header");
const allHeaders = document.querySelectorAll(".article__header");
const dashed = document.querySelector(".dashed");
const footerEl = document.querySelector(".article__footer");

header.textContent = "Welcome to Nate's blog";

console.log(allHeaders);
// allHeaders[0].classList.add("important");
// allHeaders[1].classList.add("important");

// for (i = 0; i < allHeaders.length; i++) {
//     allHeaders[i].classList.add("important");
// }

allHeaders.forEach(function(header){
    header.classList.add("important");
}) 

dashed.classList.remove("dashed");
// dashed.remove();

footerEl.classList.add("goldenrod");
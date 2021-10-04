// calls back all the classes in the document called "second"
console.log(document.getElementsByClassName("second"));

// calls back the ID in the document called "first"
console.log(document.getElementById("first"));

// calls back the h1 tag

console.log(document.querySelector("h1"));

// calls back first li

console.log(document.querySelector("li"));

// calls back all li elements

console.log(document.querySelectorAll("li"));


// get the first li elements attribute

var firstLi = document.querySelector("li");

console.log(firstLi.getAttribute("random"));

// change the attribute

firstLi.setAttribute("random","1000");

console.log(firstLi);

// Changing styles on elements

// document.querySelector("h1").style.background = "yellow";

// changing element style using class in stylesheet

var h1 = document.querySelector("h1");

h1.className = "coolTitle";

// display element style on li

document.querySelector("li").classList;

// toggling a class to the list of li elements

document.querySelector("li").classList.toggle("done");

// using innerHTML to change the text

document.querySelector("h1").innerHTML = "<strong>!!!!</strong>";

// select second element in the list

console.log(document.querySelectorAll("li")[1]);

// select the parent element of the li

console.log(document.querySelectorAll("li")[1].parentElement);

// select the children of the body

console.log(document.querySelectorAll("li")[1].parentElement.parentElement.children);
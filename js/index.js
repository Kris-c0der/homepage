const h1 = document.querySelector(".hero__title-js");
const visitor = prompt("Hello. What is your name?");

h1.innerHTML = `Hello, <span>${visitor}</span>.<br /> I'm glad you're here 🙋‍♂️👋`;

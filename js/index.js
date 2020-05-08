const h1 = document.querySelector(".hero__title-js");
const visitor = prompt("Hello. What is your name?");

if (visitor != null && visitor.length > 0) {
  h1.innerHTML = `Hello, <span>${visitor}</span>.<br /> I'm glad you're here 🙋‍♂️👋`;
} else {
  h1.innerHTML = `Hello, <span>stranger</span>.<br /> I'm glad you're here 🙋‍♂️👋`;
}

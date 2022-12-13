let btn = document.querySelector("button");
let p = document.querySelectorAll("p");
printDisplayQuote(); // ee function fetch api upoyogich quote api ninnu data eduthu p yil vekkunnu

btn.addEventListener("click", () => {
  printDisplayQuote();
});
function printDisplayQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      p[0].innerHTML = data.content;
      p[1].innerHTML = data.author;
      p.style.fontStyle = "oblique";
    });
}
       
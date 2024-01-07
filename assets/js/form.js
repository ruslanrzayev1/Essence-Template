let myForm1 = document.getElementById("myForm1");
let inpName = document.getElementById("inpName");
let inpSurname = document.getElementById("inpSurname");
let inpAge = document.getElementById("inpAge");
let inpEmail = document.querySelector(".inpEmail");

myForm1.addEventListener("submit", function (event) {
  event.preventDefault();
  axios.post("https://655c83c825b76d9884fd6f17.mockapi.io/basket", {
    name: inpName.value,
    surname: inpSurname.value,
    age: inpAge.value,
    email: inpEmail.value,
  });
});

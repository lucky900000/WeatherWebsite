console.log("welcome to js file in js folder in public folder");

// function settimefn(callback) {
//   setTimeout(() => {
//     const b = 4000;
//     callback(b);
//   }, 1000);
// }

// settimefn(50, function (value) {
//   secondfn(value, function (result) {
//     console.log(result);
//   });
// });

// function secondfn(callback) {
//   setTimeout(() => {
//     const x = 1000;
//     callback(x);
//   }, 2000);
// }

// fetch("http://localhost:4000/weather?city=mumbai&country=india").then(function (
//   response
// ) {
//   response.json().then((data) => {
//     console.log(data.city);
//   });
// });

// console.log(99);

const cityinput = document.querySelector(".cityinput");
const countryinput = document.querySelector(".countryinput");
const button = document.querySelector(".button");
const resultmsg1 = document.querySelector("#resultmsg1");
const resultmsg2 = document.querySelector("#resultmsg2");

button.addEventListener("click", function (e) {
  e.preventDefault();
  resultmsg1.textContent = "Loading";

  resultmsg2.textContent = "";
  fetch(
    `http://localhost:4000/weather?city=${cityinput.value}&country=${countryinput.value}`
  ).then(function (response) {
    response.json().then((data) => {
      if (data.error) {
        resultmsg1.textContent = data.error;
      } else {
        resultmsg1.textContent = data.city;
        resultmsg2.textContent = data.forecast;
      }
    });
  });
});

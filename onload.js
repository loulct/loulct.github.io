import * as date from "./dateCheck.js";

window.onload = function () {
  let en = document.getElementsByClassName("en");
  [].forEach.call(en, function (section) {
    section.style.display = "none";
  });

  document.getElementById("age").innerText = `(${date.calculateAge().toString()})`;
};

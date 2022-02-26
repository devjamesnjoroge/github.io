var pg1 = document.querySelector("#pg1");
var pg2 = document.querySelector("#pg2");
var pg3 = document.querySelector("#pg3");
var pg4 = document.querySelector("#pg4");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var hambg = document.querySelector("#hambg");
var nav = document.querySelector(".nav-col");
var cross = document.querySelector("#cross");
var aselect = document.querySelector(".hidev");

hambg.addEventListener("click", function (event) {
  nav.style.display = "flex";
  hambg.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", function (event) {
  nav.style.display = "none";
  hambg.style.display = "block";
  cross.style.display = "none";
});

aselect.addEventListener("click", function (event) {
  nav.style.display = "none";
  hambg.style.display = "block";
  cross.style.display = "none";
});

pg1.addEventListener("click", function (event) {
  if ((one.style.display = "none")) {
    one.style.display = "flex";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
  }
});

pg2.addEventListener("click", function (event) {
  if ((two.style.display = "none")) {
    two.style.display = "flex";
    one.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
  }
});

pg3.addEventListener("click", function (event) {
  if ((three.style.display = "none")) {
    three.style.display = "flex";
    two.style.display = "none";
    one.style.display = "none";
    four.style.display = "none";
  }
});

pg4.addEventListener("click", function (event) {
  if ((four.style.display = "none")) {
    four.style.display = "flex";
    two.style.display = "none";
    three.style.display = "none";
    one.style.display = "none";
  }
});

var pg1 = document.querySelector("#pg1");
var pg2 = document.querySelector("#pg2");
var pg3 = document.querySelector("#pg3");
var pg4 = document.querySelector("#pg4");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");

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

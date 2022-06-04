var More;
var Stuff;

var nums; 

var btn = document.querySelectorAll(".menu");
var btnCount = btn.length;



for (var i = 0; i <= btnCount; i += 1) {
  btn[i].onclick = function(e) {
    num = (this.id);
    console.log(num);

        More = document.querySelectorAll(".menu")[num];
        Stuff = document.querySelectorAll(".dropdown")[num];

        Stuff.classList.toggle("expanded");
        }
}
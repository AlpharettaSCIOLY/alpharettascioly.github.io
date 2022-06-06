/* 
Enables the arrowheads/chevron to open and close the dropdown menu when clicked on the vertical list of subpages
*/
var btn = document.querySelectorAll(".dropdown-arrowhead");
var btnCount = btn.length;

for (var i = 0; i <= btnCount; i += 1) {
  btn[i].onclick = function(e) {
    var num = (this.id);

    var Stuff = document.querySelectorAll(".dropdown")[num];
    var Chevron = document.querySelectorAll(".chevron")[num];

    Stuff.classList.toggle("expanded");
    Chevron.classList.toggle("rotate");
  }
}
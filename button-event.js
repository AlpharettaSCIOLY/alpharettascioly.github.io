var btn = document.querySelectorAll(".button-event");
var btnCount = btn.length;
for (var i = 0; i <= btnCount; i += 1) {
    console.log(btn);
  btn[i].onclick = function(e) {
    var num = (this.id);

        var More = document.querySelectorAll(".button-event")[num];
        var Stuff = document.querySelectorAll(".see-moree")[num];
        var Chevron = document.querySelectorAll(".chevron-event")[num];
        var see_more_text = document.querySelectorAll(".see-more-see-less-text-event")[num];

        Stuff.classList.toggle("expanded");
        Chevron.classList.toggle("rotate");

        const expanded = Stuff.classList.contains("expanded");
        if (expanded) {
                see_more_text.innerHTML = "See Less";
            } else {
                see_more_text.innerHTML = "See More";
            }
        }   
}
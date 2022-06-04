var seeMore;
var article;

var num; 

var buttons = document.querySelectorAll(".button-1");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        num = 1 * (this.id);
        console.log(num);

        seeMore = document.querySelectorAll(".button-1")[num];
        article = document.querySelectorAll(".see-moree")[num];

        article.classList.toggle("expanded");
        
        const expanded = article.classList.contains("expanded");
        if (expanded) {
                seeMore.innerHTML = "See Less";
            } else {
                seeMore.innerHTML = "See More";
            }
        }
};
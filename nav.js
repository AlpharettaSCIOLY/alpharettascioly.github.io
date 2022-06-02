const primaryNav = document.querySelector('.navbar');
const navToggle = document.querySelector('.mobile-nav-toggle');

// You can type what is being clicked on in '()' but since there's only one button here, it doesn't matter 
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
});
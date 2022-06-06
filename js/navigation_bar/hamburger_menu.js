/* 
Enables the "hamburger_menu" to open and close the vertical list of subpages when clicked
*/

const primaryNav = document.querySelector('.navigation_bar_subpages_dimensions');
const navToggle = document.querySelector('.hamburger-menu');

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
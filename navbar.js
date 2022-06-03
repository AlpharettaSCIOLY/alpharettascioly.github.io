const menus = document.querySelectorAll('.menu')
const dropdown = document.querySelector('.dropdown')
let activeMenu = null

menus.forEach(menu => {
  menu.addEventListener('click', e => {
    // Removing previous active menu that is not itself
    if (activeMenu && activeMenu !== menu) {
      activeMenu.classList.remove('clicked')
      activeMenu = menu
    }
    else if (activeMenu && activeMenu === menu) {
      activeMenu = null
    } else {
      activeMenu = menu
    }
    
    menu.classList.toggle('clicked')
    // If there is an active menu, show
    if (activeMenu) dropdown.classList.add('show')
    else dropdown.classList.remove('show')
  })
})
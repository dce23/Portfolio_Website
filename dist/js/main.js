// DOM(document object model) Selection items UI Structure for menu Button
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Setting the state of the menu
// A variable that represents if the menu is open or closed
let showMenu = false;   //let is used to resent it at certain times

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    // Reset the menu state
    showMenu = true;  // Now the menu should be opened
  }

  else {
    menuBtn.classList.add('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    // Back to the initial state
    showMenu = false;  // Now the menu is not opened
  }
}

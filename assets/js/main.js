/**
 * Menu show / hide
 */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
  })
}

/**
 * Remove the menu when a link is clicked on the menu
 */

const links = document.querySelectorAll('.nav__link')

function clickAction () {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

links.forEach(item => item.addEventListener('click',clickAction))
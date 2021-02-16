window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('burger-btn');
  const aside = document.getElementById('aside');
  const navbar = document.getElementById('navbar');
  const navbarBurger = document.getElementById('navbar-burgerInner');

  btn.addEventListener('click', (e) => {
    e.preventDefault()

    aside.classList.toggle('active')
    navbar.classList.toggle('active')
    navbarBurger.classList.toggle('active')
    btn.classList.toggle('active')
  })
})
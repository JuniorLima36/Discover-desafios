function openMenu() {
  const menuMobile = document.querySelector('#nav-menu');
  const menuButton = document.querySelector('#nav-button');

  menuMobile.classList.toggle('active')
  menuButton.classList.toggle('active')
}
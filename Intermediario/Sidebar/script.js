const menuIcon = document.querySelector('.menu');
const navigation = document.querySelector('.main-content');

menuIcon.onclick = () => navigation.classList.toggle('active');

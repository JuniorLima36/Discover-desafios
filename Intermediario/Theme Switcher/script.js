document.addEventListener('DOMContentLoaded', function() {
  var modeSwitch = document.querySelector('.switch');

  modeSwitch.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });  
});

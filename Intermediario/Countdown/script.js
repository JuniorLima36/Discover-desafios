let countdown = new Date('Apr 20, 2025 06:00:00').getTime();

let interval = setInterval(function() {
  let dateNow = new Date().getTime();
  let count = countdown - dateNow;

  days.innerHTML = Math.floor(count / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerHTML = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((count % (1000 * 60)) / 1000);
  
  if(count <= 0) {
    clearInterval(interval)
  }
});

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
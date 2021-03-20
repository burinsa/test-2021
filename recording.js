let count = document.querySelector('.count');
setTimeout(moveOn, 5000);

function moveOn () {
  document.location.replace("page7.html");
}

function progress () {
  let timerId = setInterval(() => {count.textContent++;}, 500);
  setInterval(() => {clearInterval(timerId);}, 5100);
}

progress();


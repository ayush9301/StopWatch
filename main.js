const box = document.getElementById("box");
const start = document.getElementById("start");
const stp = document.getElementById("stop");

const reset = document.getElementById("reset");
const h2 = document.querySelector("h2");

let time = 0;
let value;
let interval;
function startBtn() {
    if (!interval) {
      interval = setInterval(() => {
        time++;
        box.innerText = time; 
      }, 350); 
    }
  }

  function stopBtn() {
    clearInterval(interval);
    interval = null; 
  }
function resett() {
    clearInterval(interval);
    interval = null;
    time = 0; 
    box.innerText = time; 
  }

stp.addEventListener("click", stopBtn);

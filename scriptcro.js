const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const milliSecondsDisplay = document.getElementById("milliSeconds");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

let timerInterval;
let isRunning = false;
let totalMinutes = 0;
let totalSeconds = 0;
let totalMilliseconds = 0;

function startTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopButton.textContent = "Começar";
  } else {
    timerInterval = setInterval(() => {
      totalMilliseconds += 100;
      if (totalMilliseconds >= 1000) {
        totalSeconds += Math.floor(totalMilliseconds / 1000);
        totalMilliseconds %= 1000;
      }
      updateTimerDisplay();
    }, 100);
    startStopButton.textContent = "Parar";
  }
  isRunning = !isRunning;
}

function resetTimer() {
  clearInterval(timerInterval);
  totalMinutes = 0;
  totalSeconds = 0;
  totalMilliseconds = 0;
  updateTimerDisplay();
  resetButton.textContent = "Resetar";
  isRunning = false;
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = totalMilliseconds % 1000;

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
  milliSecondsDisplay.textContent = String(milliseconds).padStart(3, "0");
}

startStopButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

let timer;
let elapsedSeconds = 0; // Time in seconds

const updateDisplay = () => {
    const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
    const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};

const startTimer = () => {
    if (timer) return; // If timer is already running, do nothing
    timer = setInterval(() => {
        elapsedSeconds++;
        updateDisplay();
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timer);
    timer = null;
};

const resetTimer = () => {
    stopTimer();
    elapsedSeconds = 0;
    updateDisplay();
};

const restartTimer = () => {
    resetTimer();
    startTimer();
};

// Event Listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initialize display
updateDisplay();

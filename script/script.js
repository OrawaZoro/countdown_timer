const countdown = document.getElementById("countdown");
const countdownInput = document.getElementById("countdown-input");
const countdownDateInput = document.getElementById("countdown-date");
const countdownStartButton = document.getElementById("countdown-start");
let countdownInterval;

countdownInput.addEventListener("submit", (event) => {
  event.preventDefault();

  const countdownDate = new Date(countdownDateInput.value).getTime();

  countdownInterval = setInterval(() => {

    const now = new Date().getTime();

    const timeRemaining = countdownDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      countdown.innerHTML = "EXPIRED";
    }
  }, 1000);

  countdownDateInput.disabled = true;
  countdownStartButton.disabled = true;
});

countdownStartButton.addEventListener("click", () => {
  countdownInput.dispatchEvent(new Event("submit"));
});

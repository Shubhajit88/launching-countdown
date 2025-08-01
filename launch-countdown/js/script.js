$(document).ready(function () {
  const launchDate = new Date("2025-08-05T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      $("#countdown").html("<h2>We're Live!</h2>");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});

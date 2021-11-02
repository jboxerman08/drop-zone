// # Option B
// # The timer counts down to midnight to a configurable date.
// # Declare a date variable that can take a date of format MM / DD / YYYY.

// Setting the date we're counting down to
const countDownDate = new Date("Dec 28, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

  // Today's date and time
  const now = new Date().getTime();

  // Distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("countdown").innerHTML = days + " " + hours + " "
    + minutes + " " + seconds;

  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

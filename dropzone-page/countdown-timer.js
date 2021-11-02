// # Option B
// # The timer counts down to midnight to a configurable date.
// # Declare a date variable that can take a date of format MM / DD / YYYY.

const countdown = () => {
  const countDate = new Date("Dec 28, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const timeDiff = countDate - now;

  // Determine time constants
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Use time constants to get the time difference in days/hours/minutes/seconds
  const textDay = Math.floor(timeDiff / day);
  const textHour = Math.floor((timeDiff % day) / hour);
  const textMinute = Math.floor((timeDiff % hour) / minute);
  const textSecond = Math.floor((timeDiff % minute) / second);

  // Function to always get 2 digits when time goes to single digits
  const integerToMinimumIntegerDigits = (number, minIntegerDigits) => {
    return number.toLocaleString(undefined, { minimumIntegerDigits: minIntegerDigits });
  };

  // Replace text in html from time to
  document.querySelector('.day1').innerText = integerToMinimumIntegerDigits(textDay, 2).split('')[0];
  document.querySelector('.day2').innerText = integerToMinimumIntegerDigits(textDay, 2).split('')[1];
  document.querySelector('.hour1').innerText = integerToMinimumIntegerDigits(textHour, 2).split('')[0];
  document.querySelector('.hour2').innerText = integerToMinimumIntegerDigits(textHour, 2).split('')[1];
  document.querySelector('.minute1').innerText = integerToMinimumIntegerDigits(textMinute, 2).split('')[0];
  document.querySelector('.minute2').innerText = integerToMinimumIntegerDigits(textMinute, 2).split('')[1];
  document.querySelector('.second1').innerText = integerToMinimumIntegerDigits(textSecond, 2).split('')[0];
  document.querySelector('.second2').innerText = integerToMinimumIntegerDigits(textSecond, 2).split('')[1];

  // If the count down is finished
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
}

setInterval(countdown, 1000);

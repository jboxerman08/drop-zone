// # Option B
// # The timer counts down to midnight to a configurable date.
// # Declare a date variable that can take a date of format MM / DD / YYYY.

// // Setting the date we're counting down to
// const countDownDate = new Date("Dec 28, 2021 00:00:00").getTime();

// // Update the count down every 1 second
// const x = setInterval(function () {

//   // Today's date and time
//   const now = new Date().getTime();

//   // Distance between now and the count down date
//   const timeDifference = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   // console.log(seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
//   const integerToMinimumIntegerDigits = (number, minIntegerDigits) => {
//     return number.toLocaleString(undefined, { minimumIntegerDigits: minIntegerDigits });
//   };

//   document.getElementById("countdown").innerHTML = integerToMinimumIntegerDigits(days, 2) + " " + integerToMinimumIntegerDigits(hours, 2) + " "
//     + integerToMinimumIntegerDigits(minutes, 2) + " " + integerToMinimumIntegerDigits(seconds, 2);

//   // If the count down is finished
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);




// Countdown tutorial

const countdown = () => {
  const countDate = new Date("Dec 28, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const timeDiff = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(timeDiff / day);
  const textHour = Math.floor((timeDiff % day) / hour);
  const textMinute = Math.floor((timeDiff % hour) / minute);
  const textSecond = Math.floor((timeDiff % minute) / second);

  const integerToMinimumIntegerDigits = (number, minIntegerDigits) => {
    return number.toLocaleString(undefined, { minimumIntegerDigits: minIntegerDigits });
  };
  // document.getElementById("countdown").innerHTML = integerToMinimumIntegerDigits(days, 2) + " " + integerToMinimumIntegerDigits(hours, 2) + " "
  //   + integerToMinimumIntegerDigits(minutes, 2) + " " + integerToMinimumIntegerDigits(seconds, 2);

  // document.querySelector('.day').innerText = textDay;
  document.querySelector('.day').innerText = integerToMinimumIntegerDigits(textDay, 2);
  // document.querySelector('.hour').innerText = textHour;
  document.querySelector('.hour').innerText = integerToMinimumIntegerDigits(textHour, 2);
  // document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.minute').innerText = integerToMinimumIntegerDigits(textMinute, 2);
  // document.querySelector('.second').innerText = textSecond;
  document.querySelector('.second').innerText = integerToMinimumIntegerDigits(textSecond, 2);
}

setInterval(countdown, 1000);

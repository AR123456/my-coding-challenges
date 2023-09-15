// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] < 10) {
//       return digits;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// };

// // Example: Incrementing a date represented as an array [year, month, day]
// function incrementDate(dateArray) {
//   // Increment the day
//   dateArray[2] = plusOne([dateArray[2]]);

//   // If the day rolls over to 1, increment the month
//   if (dateArray[2][0] === 0) {
//     dateArray[1] = plusOne([dateArray[1]]);

//     // If the month rolls over to 1, increment the year
//     if (dateArray[1][0] === 0) {
//       dateArray[0] = plusOne([dateArray[0]]);
//     }
//   }

//   return dateArray;
// }

// // Test case: Incrementing date [2023, 9, 8]
// let incrementedDate = incrementDate([2023, 9, 8]);
// console.log(`Incremented date: ${incrementedDate.join("/")}`);
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(year, month) {
  const days = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return days[month - 1];
}

function incrementDate(dateArray) {
  let [year, month, day] = dateArray;
  day++;

  if (day > daysInMonth(year, month)) {
    day = 1;
    month++;
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return [year, month, day];
}

let date = [2023, 12, 31];
let incrementedDate = incrementDate(date);
console.log(`Incremented date: ${incrementedDate.join("/")}`);

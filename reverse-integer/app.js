// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// let int = 125;
// function reverseInt(int) {
//   console.log(parseFloat(int.toString().split("").reverse().join("")));
// }

// reverseInt(int);

let int = 125;
const reverseInt = (int) => {
  console.log(parseFloat(int.toString().split("").reverse().join("")));
};

reverseInt(int);

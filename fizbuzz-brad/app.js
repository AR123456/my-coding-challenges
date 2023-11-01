// problem to solve
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(nums) {
  for (let i = 0; i < nums; i++) {
    if (nums % 3 === 0) {
      console.log("Fizz");
    }
    if (nums % 5 === 0) {
      console.log("Buzz");
    }
    if (nums % 3 === 0 || nums % 5 === 0) console.log("Fizz Buzz");
  }
}

fizzBuzz(100);

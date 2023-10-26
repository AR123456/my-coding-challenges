// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. umbers naturally grow exponentially in difference of values as you get further into the sequence. When you divide a Fibonacci number by the one behind it, you get a 1:1.6 ratio and it stays the same FOREVER.
// https://www.programiz.com/javascript/examples/fibonacci-series
const generateFibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let nextNum;

  for (let i = 0; i < num; i++) {
    //0, 1= 1
    //1+ 2= 3
    //3+ 5,= 8
    //8+13 = 21
    //0, 1, 1, 2, 3, 5, 8, 13,
    console.log(n1);
    //  first time next num 0 +1 , after that nextNum is the sum or prior 2
    nextNum = n1 + n2;
    // set first 1 + 1
    n1 = n2;
    // set
    n2 = nextNum;
  }
};

generateFibonacci(29);

// create array of letters of the alphabet
let alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
console.log(alphabet);

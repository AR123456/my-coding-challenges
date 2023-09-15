// notes and code from this web dev simplifed video
// https://www.youtube.com/watch?v=3a0I8ICR1Vg

function outerFunction(outerVariable) {
  const outer2 = "Hi";
  // calling outerfunction returns this
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
    console.log(outer2);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

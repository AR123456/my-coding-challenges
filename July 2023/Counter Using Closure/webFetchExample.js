// notes and code from this web dev simplifed video
// https://www.youtube.com/watch?v=3a0I8ICR1Vg

function outerFunction(url) {
  fetch(url).then(() => {
    console.log(url);
  });
}

const newFunction = outerFunction("outside");
newFunction("inside");

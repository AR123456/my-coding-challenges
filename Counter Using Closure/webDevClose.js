// notes and code from this web dev simplifed video
// https://www.youtube.com/watch?v=3a0I8ICR1Vg
// global var scoped to everywhere
const myName = "Anne";

function printName() {
  // can use Anne in here
  console.log(myName);
}
printName();

let myChangingName = "Anne";

function printChangingName() {
  console.log(myChangingName);
}
myChangingName = "Amy";
printChangingName();
myChangingName = "Kate";
printChangingName();

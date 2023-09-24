// class Person {
//   name = "Neet";
//   printName() {
//     console.log(this.name);
//   }
// }
// new Person().printName();
const Person = {
  name: "Neet",
};
function printName() {
  console.log(this.name); // undefined without apply method
}
printName();
// pass in context - in this case person
printName.apply(Person);

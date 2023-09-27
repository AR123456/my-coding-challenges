const promise = new Promise(callback);

// promise
//   //   .then(() => console.log("hello"))
//   .catch(() => console.log(err));
// // function callback(resolve, reject) {
// //   setTimeout(() => reject(), 1000);
// // }
// function callback(resolve, reject) {
//   try {
//     resolve();
//   } catch (err) {
//     reject(" Error occured");
//   }
// }

//Promise can resolve, reject or pend

promise
  .then(() => console.log("hello"))
  .catch(() => console.log("error"))
  .finally(() => console.log("promise complete"));
function callback(resolve, reject) {
  reject();
}

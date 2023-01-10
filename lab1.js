console.log("------------(a)--------------");

console.log("Created mySum.js");

console.log("------------(b)--------------");

const mySum = require("./mySum");
console.log(mySum(1, 2, 3));

console.log("------------(c)--------------");

// let myArr = [1, 2, 3, 4, 5];
let myArr = [10, 8, 2];
console.log(myArr);

console.log("------------(d)--------------");

mySum(...myArr);
//myArrを全部足した数
const result = mySum(...myArr);
console.log(result);

console.log("------------(e)--------------");

let mySecondArr = [1, 2, 3];
// mySecondArr = myArr.map((x) => x * 2);
console.log(mySecondArr);

console.log("------------(f)--------------");

const average = mySum(...mySecondArr) / mySecondArr.length;
console.log(average);
const aboveNum = mySecondArr.filter((el) => el > average);
console.log(aboveNum);

console.log("------------(g)--------------");

setTimeout(() => {
  console.log("Good bye");
}, 3000);

console.log("------------(h)--------------");

const employee = {
  name: "Jung Kook",
  email: "jungkook@gmail.com",
  department: "BTS",
  startDate: "June 12th, 2013",
};

let personName = employee.name;
let personEmail = employee.email;

const person = { personName, personEmail };
console.log(person);


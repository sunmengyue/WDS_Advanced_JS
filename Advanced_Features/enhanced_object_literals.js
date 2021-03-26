/* 1. Same key value words */

const firstName = 'Simon';
const age = 30;
const propertyName = 'name';
const index = 1;
// const sayHi = function () {
//   console.log('hi');
// };

// const person = {
//   firstName,
//   age,
//   sayHi,
// };

// console.log(person);

/* 2. Function */

// const person = {
//   firstName,
//   age,
//   sayHi() {
//     console.log('hi');
//   },
// };

// console.log(person);

/* 3. dynamic or computed names */
const person = {
  [propertyName]: firstName,
  [`age${index}`]: age,
  sayHi() {
    console.log('hi');
  },
};
//person[propertyName] = firstName;
console.log(person);

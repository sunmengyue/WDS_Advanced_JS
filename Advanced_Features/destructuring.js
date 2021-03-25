/* 1. Array Destructuring */
const myArr = ['A', 'B', 'C', 'D', ['E', 'F']];
// const first = myArr[0];
// const second = myArr[1];
const [first, second, , fourth, [fifth, sixth]] = myArr;
console.log(first);
console.log(second);
console.log(fourth);
console.log(fifth);

function addAndMultiply(a, b) {
  return [a + b, a * b];
}
// const results = addAndMultiply(2, 3);
// const result1 = results[0];
// console.log(result1);

const [sum, multiplication] = addAndMultiply(2, 3);
console.log(sum);
console.log(multiplication);

/* 2. Object Destructuring */
const person = {
  name: 'Simon',
  age: 30,
  favorateFood: 'Hotpot',
  address: {
    street: '1111 Main st',
    city: 'Weymouth',
    zipcode: '5555',
  },
};

// const name = person.name;
// console.log(name);
// const age = person.age;
// console.log(age);
const { name: firstName, age } = person;
console.log(firstName);
console.log(age);

const { address } = person;
// const {street} = address;
const {
  address: { street, city, zipcode = 12345 },
} = person;
console.log(street);
console.log(city);
console.log(zipcode);

/* Practice */
const getFullNameArr = function (fullName) {
  const result = fullName.split(' ');
  console.log(result);
  return result;
};

const getFullNameObj = function (fullName) {
  // let resultArr = fullName.split(' ');
  // let result = {
  //   myFirstName: resultArr[0],
  //   myLastName: resultArr[1]
  // };
  const [firstNameob, lastNameob] = fullName.split(' ');
  return {
    firstName: firstNameob,
    lastName: lastNameob,
  };
};

const { myFirstName, myLastName } = getFullNameArr('Simon Sun');

/* 3. Pass in destructruing as parameters */
function multiplyAndAdd({ a, b = 3 }) {
  return [a * b, a + b];
}

const [product2, sum2] = multiplyAndAdd({ a: 2 });

console.log(product2, sum2);

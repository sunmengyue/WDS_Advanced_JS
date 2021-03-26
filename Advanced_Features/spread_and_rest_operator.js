/* 1. Rest operator */
function sumMultiplier(multiplier, ...numbers) {
  return multiplier * numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumMultiplier(10, 2, 3, 5, 6));

/* 2. pread operator */
const array = [2, 3, 5];
console.log(sumMultiplier(...array));

// 2.1. the most often usecase: copy a new array
const newArray = [...array];
array.push(5);

console.log(newArray);
console.log(array);

// 2.2. not so useful usecase
function concatNames(firstName, secondName) {
  console.log(firstName + ' ' + secondName);
}

const names = ['Simon', 'Sun'];
console.log(concatNames(...names));

const divs = document.querySelectorAll('div'); // these divs are in a nodelist and we cannot use our awesome array functions
//const divs = [...document.querySelectorAll("div")];
console.log(divs);
// to transfer the nodelist into an array:
[...divs].map((div) => {
  console.log(div);
});

// 2.3. The usecase ties with destructuring
const [first, second, ...rest] = array;
console.log(first, second, rest);

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

const { name, age, ...rest2 } = person;
console.log(name, age, rest2);

const details = {
  work: 'developer',
  hobbies: 'cat',
};

const person2 = { ...person, ...details };
person.name = 'Sally';
console.log(person2);
console.log(person);

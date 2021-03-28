/* Intro */
const currencyMap = {
  'United States': 'USD',
  India: 'Rupee',
};

const currency = currencyMap['India'];
console.log(currency);

const currencyMap2 = [
  { name: 'USD', country: 'United States' },
  { name: 'Rupee', country: 'India' },
];
const currency2 = currencyMap2.find((c) => c.country === 'India').name;
console.log(currency2);

/* Map */
const map = new Map([
  ['USD', 'United States'],
  ['India', 'Rupee'],
]);
console.log(map);

/* Difference with Obj 1: The key can be anything */
// In an object, the key can only be string. We set our key to be an object in this case
const map2 = new Map([
  [{ a: 1 }, 'United States'],
  ['India', 'Rupee'],
]);

// key as a boolean
const map3 = new Map([
  [false, 'United States'],
  ['India', 'Rupee'],
]);

// key(obj) to value(obj)
const user = {
  name: 'Simon',
};

const userMap = new Map([[user, { age: 30 }]]);
console.log(userMap.get(user));

/* Comparison between object and map */

// 1. loop through a map vs. loop through an object
// The order of the value in the map is always the same as the order you add them into the map
const myMap = new Map([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
  [4, 'D'],
]);

myMap.forEach((key, value) => {
  console.log(key, value);
});

// However, to iterate an object
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

Object.entries(obj).forEach(([key, value]) => console.log(key, value));

// 2. size
console.log(myMap.size);

// Map functions
myMap.set(5, 'E');

console.log(myMap.get(5));
console.log(myMap);

console.log(map.has(6));

map.delete(1);
console.log(map);

map.clear();
console.log(map);

/* Practice */
const items = [
  {
    id: 1,
    name: 'test1',
    description: 'desc1',
  },
  {
    id: 2,
    name: 'test2',
    description: 'desc2',
  },
  {
    id: 2,
    name: 'test2',
    description: 'desc2',
  },
];

function getItem(id) {
  return items.find((item) => items.id === id);
}

const itemsMap = new Map([
  [1, { name: 'test1', description: 'desc1' }],
  [2, { name: 'test2', description: 'desc2' }],
  [3, { name: 'test3', description: 'desc3' }],
]);

console.log(itemsMap.get(1));

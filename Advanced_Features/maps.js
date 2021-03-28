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

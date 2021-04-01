const sym = Symbol();
console.log(sym);

// Each symbol is unique. Every time you create a symbol, it is 100% unique
const sym1 = Symbol('Name');
const sym2 = Symbol('Name');
const sym3 = Symbol('Name');
console.log(sym1 == sym2);

const person = {
  [sym1]: 'Simon', // this is not accessible anywhere else unless we have access to the sym1 variable
  age: 30,
  Name: 'mengyue', // symbol does not conflicts with the key
};

// To prove we do not have access to sym1, we can do two things below
Object.entries(person).forEach(([key, value]) => {
  console.log([key, value]);
});

console.log(JSON.stringify(person));

// Symbols are hidden and not accessible, except with one specific function:
console.log(Object.getOwnPropertySymbols(person));

// Test: go see module.js and script.js

// To create global symbols, even if symbol is unique:
const symGlobal = Symbol.for('name');
const person2 = {
  [symGlobal]: 'mengyue',
  age: 29,
};

/* Symbol application */
const LOG_LEVEL = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARNING: Symbol('warning'),
  ERROR: Symbol('error'),
};

const loglevel = LOG_LEVEL.DEBUG;
if (loglevel == LOG_LEVEL.DEBUG) {
  console.log(loglevel);
}

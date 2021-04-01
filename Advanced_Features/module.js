const sym1 = Symbol('name');
export const person = {
  [sym1]: 'Simon',
  age: 30,
};

console.log(person[sym1]);

import { person } from './module.js';

console.log(person);

Object.entries(person).forEach(([key, value]) => {
  console.log([key, value]);
});

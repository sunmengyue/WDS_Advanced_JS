/* Intro */
const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4;

if (!uniqueList.includes(newNumber)) {
  uniqueList.add(newNumber);
}

console.log(uniqueList);

/* Set */
const set = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(set);
// set methods
// add
set.add(5);
set.add(4);
// has
console.log(set.has(0));
// you can do
set.forEach((value) => console.log(value));
// but generally we care more about do we have the value, rather than the index of the value
set.delete(3);
console.log(set);
// clear
set.clear();
console.log(set);

/* practice */
function removeDups(arr) {
  return [...new Set(arr)];
}

console.log(removeDups([1, 2, 3, 3, 6, 4, 4, 6, 7, 5, 6]));

function* simpleGenerator() {
  console.log('before 1');
  yield 1;
  console.log('after 1');
  console.log('before 2');
  yield 2;
  console.log('after 2');
  console.log('before 3');
  yield 3;
  console.log('after 3');
}

const generator = simpleGenerator();
// generator.next();
// generator.next();
// generator.next();
// generator.next();

function* fibonacciGenerator() {
  let prevOne = 0; // base case
  let prevTwo = 1; // base case
  yield 0;
  yield 1;
  while (true) {
    const result = prevOne + prevTwo;
    yield result;
    prevOne = prevTwo;
    prevTwo = result;
  }
}

const fiboGenerator = fibonacciGenerator();
// console.log(fiboGenerator.next());
// console.log(fiboGenerator.next());
// console.log(fiboGenerator.next());
// console.log(fiboGenerator.next());
// console.log(fiboGenerator.next());
// console.log(fiboGenerator.next());

function* idGenerator() {
  let count = 1;

  while (true) {
    yield count++;
  }
}

const IdGenerator = idGenerator();
console.log('Id', IdGenerator.next());
console.log(IdGenerator.next());
/* Pass a value to next */
console.log(IdGenerator.return(2));
console.log(IdGenerator.next());

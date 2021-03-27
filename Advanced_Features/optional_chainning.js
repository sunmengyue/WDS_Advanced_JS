const simon = {
  name: 'simon',
  age: 30,
  //   address: {
  //     street: '1146 Main st',
  //     city: 'Boston',
  //   },
  //   sayHi() {
  //     console.log('hi');
  //   },
  // hobbies: ['gaming', 'pet'],
};

/* intro: Short circuiting */
function printStreet(person) {
  console.log(person && person.address && person.address.street);
}

/* 1. Optional Chaining on Object Attributes */
function printSt(person) {
  console.log(person?.address?.street);
  // check if person is null or undifined -> check if address is null or undefined
}

/* 2. Optional Chaining on Object Method */
function callSayHi(person) {
  person?.sayHi?.();
}

callSayHi(simon);

/* 3. Obtional Chaining on Attributes as an Array */
function printHobby1(person) {
  console.log(person?.hobbies?.[0]);
}

printHobby1(simon);

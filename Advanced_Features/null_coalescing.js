function greet(firstName, lastName) {
  lastName = lastName ?? 'Sun'; // || comapre all false values include "" and 0
  console.log(`${firstName} ${lastName}`);
}

greet('Simon', false); // to only compare undefined and null, "" and 0 are not included

console.log(undefined ?? (false && (true || false)));

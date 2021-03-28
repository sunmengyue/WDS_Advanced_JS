function greet(
  firstName,
  lastName,
  salutation = 'Hi',
  fullName = `${firstName} ${lastName}`,
) {
  //salutation = salutation || 'Hi';
  console.log(`${salutation}, ${firstName} ${lastName}: ${fullName} `);
}

// greet('Simon', 'Sun');
// greet('Simon', 'Sun', undefined);
// greet('Simon', 'Sun', null);

/* use undefine as a placeholder, but not good practice. It is better to put default parameters at the end */
function sayHello(firstName = 'Simon', lastName, greeting = 'Nihao') {
  console.log(`${firstName} ${lastName}, ${greeting}`);
}

// sayHello(undefined, 'Sun');

/* use object instead of backtics in default parameters */
function greeting(
  firstName,
  lastName,
  { salutation = 'Hi', suffix = 'Mr' } = {},
) {
  console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}

greeting('Simon', 'Sun');

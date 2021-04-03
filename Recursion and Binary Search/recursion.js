function fibonacciSeq(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacciSeq(n - 1) + fibonacciSeq(n - 2);
}

console.log(fibonacciSeq(5));

function getPower(base, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return base;
  }
  return getPower(base, n - 1) * getPower(base, 1);
}

console.log(getPower(2, 5));

function getpowerBetter(base, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return base;
  }
  if (n % 2 === 0) {
    return getpowerBetter(base, n / 2) ** 2;
  } else {
    return getpowerBetter(base, Math.floor(n / 2)) ** 2 * base;
  }
}
console.log(getpowerBetter(2, 7));

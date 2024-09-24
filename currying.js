// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence
// of functions, each taking a single argument.

// This allows for partial application, where you can fix some arguments of the function and create a new function
// that takes the remaining arguments.

// Key Points about Currying
// Transforms functions: Converts a function with multiple arguments into a series of functions, each accepting one argument.
// Enables partial application: Allows you to pre-set some arguments and get a new function for the remaining arguments.

function add(a, b, c) {
  return a + b + c;
}

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // Output: 6

//

// -----------------------   generic curry function  ----------------------

//

function curry(fn) {
  console.log("fn:", fn.length);
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example usage
const addd = (a, b, c) => a + b + c;
const curriedAddd = curry(addd);

console.log(curriedAddd(1)(2)(3)); // Output: 6
console.log(curriedAddd(1, 2)(3)); // Output: 6
console.log(curriedAddd(1)(2, 3)); // Output: 6

//  Amazon interview question

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)(4)());

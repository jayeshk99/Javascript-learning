let nameObj = {
  firstName: 'jay',
  lastName: 'k',
  printFullName: function (hometown, state) {
    console.log(
      this.firstName + ' ' + this.lastName + ',' + hometown + ',' + state
    );
  },
};

let name2 = {
  firstName: 'sachin',
  lastName: 'Tendulkar',
};

nameObj.printFullName.call(name2, 'Mumbai', 'Maharashtra');

// call is method of javascript used to call any function in respect to any object.
// useful when you want to change the context in which a function executes.
// It takes the context object as first argument & followed by the other arguments

//  -------------------   apply

nameObj.printFullName.apply(name2, ['mumbai', 'maharasthtra']);

// Apply is same as call, just it takes the array of all the arguments you want to pass.

// Apply is used where we want to create dynamic function in which we don't know the no of arguments, and call
// any function with those arguments

function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log('midpoing', midpoint(3, 1, 4, 1, 5)); // 3
// here we don't know the

// ---------------------  bind

let printMyName = nameObj.printFullName.bind(name2, 'mumbai', 'maharshtra');
printMyName();

// bind creates a new function with the given context, and the arguments
// but it doesnt execute or invoke the function
// when called, has its this keyword set to the provided value
// used when you need to maintain the context ('this')

// this is used to maintain context in the callbacks

const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const person2 = {
  name: 'bob',
};

setTimeout(person.greet, 1000); // Output: "Hello, my name is undefined"
// Without bind, the this context inside person.greet is lost when passed to setTimeout. By using bind, you can maintain the correct context:

setTimeout(person.greet.bind(person), 1000); // Output: "Hello, my name is bob"

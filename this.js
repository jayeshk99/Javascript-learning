const a = () => {
  console.log("arrow this", this);
};
function b() {
  console.log("fun this", this);
}
const obj1 = { name: "obj1" };
obj1.getArrowThis = a;
obj1.getRegFunThis = b;

// ----------- Arrow Function

// Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined.
// However, arrow functions do not have their own this binding.
// Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.
obj1.getArrowThis();
a();
// ------------ Normal Function
obj1.getRegFunThis(); //obj1 prints
// When a regular function is invoked as a method of an object (obj.method()), this points to that object.

b(); //global object prints
// When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object

let arr = [1, 2, 3];
arr.map(a);

console.log("this in global space", this);

// ----------------------------------
let obj2 = {
  c: 10,
  x: function () {
    console.log("this in obj method normal func", this);
  },
  y: () => {
    console.log("this in arrow fun in obj method", this);
  },
  z: function () {
    const xy = () => {
      console.log("this in arrow wrapped by normal func", this);
    };
    xy();
  },
};

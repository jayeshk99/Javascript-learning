let a = [1, 2, 3, 4];

// Array.prototype.myFilter = function (cb) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) output.push(this[i]);
//   }
//   return output;
// };

// let firstFilter = a.myFilter((a) => a > 2);
// console.log('firstFilter:', firstFilter);
let arr = [
  { a: 1, b: 1 },
  { a: 5, b: 5 },
  { a: 10, b: 10 },
];

Array.prototype.myMap = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
};
// chat gpt solution
// if (!Array.prototype.map) {
//   Array.prototype.map = function (callback, thisArg) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.map called on null or undefined');
//     }

//     // Ensure the callback is a function
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }

//     var result = []; // Array to hold the results
//     var O = Object(this); // Convert 'this' into an object
//     var len = O.length >>> 0; // Ensure length is a valid positive integer

//     for (var i = 0; i < len; i++) {
//       if (i in O) {
//         result[i] = callback.call(thisArg, O[i], i, O); // Call the callback for each element
//       }
//     }

//     return result; // Return the new array
//   };
// }

let arr2 = arr.myMap((value, i, arr) => {
  return arr;
});

Array.prototype.myFilter = function (cb, thisArg) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    let condition = cb.call(thisArg, this[i], i, this);
    if (condition) output.push(this[i]);
  }
  return output;
};

console.log(a.myFilter((a) => a > 2));

Array.prototype.myReduce = function (cb, initialValue) {
  let output = initialValue ? initialValue : null;
  for (let i = 0; i < this.length; i++) {
    output = cb(output, this[i]);
  }
  return output;
};

console.log(a.myReduce((acc, cur) => acc + cur));
console.log(arr.reduce((acc, cur) => ({ a: acc.a + cur.a, b: acc.b + cur.b })));

let a = {
  name: 'jay',
  address: { city: 'nasik', state: 'Maharashtra' },
};
let aa = {
  role: 'developer',
};
let b = Object.assign({}, a);
let ab = Object.assign(aa, a);
console.log('ab:', ab);

b.address.city = 'pune';
b.name = 'jk';
console.log('b:', b);
console.log('a:', a);

// The spread operator performs a shallow copy, not a deep copy. This means that nested objects or arrays are copied by reference, not value.

console.log('-----------------------------------');
let c = structuredClone(a);
c.address.city = 'pune';
console.log('c:', c);
console.log('a:', a);

// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log('i', i);
//   }, 1000);
// }
console.log(1);
// async function func() {
//   console.log(2);
//   await console.log(3);
//   console.log(4);
// }

let promisee = new Promise(() => {
  console.log(2);
})
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(3);
  });

console.log(5);
// func();
promisee.then();
console.log(6);
//1
//5
//2
//6
//3
//4

console.log('-------------------------');

new Promise((res, rej) => {
  console.log(1);
  res(2);
  Promise.resolve(3)
    .then((val) => {
      console.log(val);
      return 4;
    })
    .then(console.log);
}).then(console.log);

console.log(5);

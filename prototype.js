// Types of setting prototype ::
// 1) object.create()
const personPrototype = {
  greet: function () {
    console.log("Hello !!");
  },
};
let ram = Object.create(personPrototype);
ram.greet();
console.log("ram ----", ram);

// 2) constructors
function Box(value) {
  this.score = value;
}
Box.prototype.getscore = function () {
  return this.score;
};

let box1 = new Box(1);
console.log("box1:", box1.getscore());
let box2 = new Box(2);

// INHERITANCE

function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor

  this.breed = breed;
}
// should not do this, changing complete prototype
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(`bho bho !!!${this.breed} barks like this.`);
};

let myDog = new Dog("Tarun", "Pug");

myDog.sayHello();
myDog.bark();

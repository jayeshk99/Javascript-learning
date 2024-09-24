class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  sayHello(action) {
    console.log(
      `Hello,, I am ${this.name} and my breed is ${this.breed}. Let's ${action}`
    );
  }
}

let myAnimal = new Animal("Tarun", "Pug");
console.log(myAnimal);
myAnimal.sayHello("Bark");

// Extends ------------

class Dog extends Animal {
  constructor(name, breed, activity) {
    super(name, breed);
    this.activity = activity;
  }
  action(style) {
    console.log(
      `${this.name} is a ${this.breed} and ${this.activity} like ${style} `
    );
  }
}

let ourDog = new Dog("Tarun", "Pug", "Barks");
console.log("ourDog:", ourDog);
ourDog.action("Bho bho bho");
ourDog.sayHello("Bark");

//   private method  & variable
class Cat extends Animal {
  #privateName;
  constructor(name, activity, privateName) {
    super(name);
    this.activity = activity;
    this.#privateName = privateName;
  }
  publicMehtod() {
    this.#privateMethod();
  }
  #privateMethod() {
    console.log(
      `Hello ${this.name}, you called me privately ${this.#privateName}`
    );
  }
}
let myCat = new Cat("Billi", "myaav", "privateName");
// can access public method
myCat.publicMehtod();
console.log("Public Property", myCat.name);
// cant access private method
// myCat.privateMethod();
console.log("Private Property", myCat.privateName);

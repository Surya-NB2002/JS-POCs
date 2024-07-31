// Prototypes in JS OOPS to add own/custom methods to an object that can be used from another different object.
// Prototype is by default prsent in an object and contains in-built methods that can be accessed
// Example:
const employee = {
  calcTax() {
    console.log("Tax is 10%");
  }
};

const jack = {
  salary:50000
};

jack.__proto__ = employee;
jack.calcTax(); // here, the calcTax() function of employee object can be accessed via prototype created for a specific employee named jack

// OOPS pillars

// 1) Encapsulation: to bind data (variables) and methods/functions together as single unit and restrict access by providing getters/setters to access them indirectly
class Person {
  constructor(name, age) {
    let _name = name; // private variable declared with _ in starting of variable name that cant be accessed directly
    let _age = age;   

    this.getName = function() { // getter methods to fetch name/age of a person
      return _name;
    }

    this.getAge = function() {
      return _age;
    }

    this.setName = function(name) { // setter methods to update name/age value to a different one
      _name = name;
    }

    this.setAge = function(age) {
      if (age > 0) {
        _age = age;
      }
    }
  }
}

const person = new Person('John', 30);
console.log(person.getName()); // John
console.log(person.getAge()); // 30
person.setAge(35);
console.log(person.getAge()); // 35

// 2) Inheritance: a mechanism by which one class(child) can inherit the properties and methods of another class(parent)
// here, super keyword is used to access parent class's variables and methods initialized in its respective constructor
class Animal {  // Parent class Animal
  constructor(name) {
    this.name = name; // instance variable of Animal class
  }

  speak() {
    console.log(`${this.name} makes a sound`); // method of Animal class
  }
}

class Dog extends Animal {  // Child class Dog
  constructor(name, breed) {
    super(name);  // super keyword to access instance variable name of Animal class from Dog class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex barks 

// 3) Polymorphism: the ability of something to have or to be displayed in more than one form.
// here same method speak() exists in all classes but the child implementation of speak() overrides parent's implementation
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows');
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

const dog = new Dog();
const cat = new Cat();
makeAnimalSpeak(dog); // Dog barks
makeAnimalSpeak(cat); // Cat meows

// 4) Abstraction: it is the concept of hiding the complex implementation details and showing only the essential features of the object.
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }
// here, Shape is abstract class and it cant be instantiated. Abstract class's method dont have implementation body but can be defined via child class
  getArea() {
    throw new Error("Method 'getArea()' must be implemented");
  }
}

class Rectangle extends Shape {  // child class
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height; // getArea() implementation inside Rectangle child class having parent class Shape
  }
}

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Rectangle Area: 24

const shape = new Shape(); // throws error as abstract class cant be instantiated

//extends
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }
    speak() {
        console.log(this.name + ' barks.');
    }
}

let d = new Dog("Mitzie");
d.speak();

//extend traditional function-based "classes"
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise");
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " barks");
    }
}

let d = new Dog("Mitzie");
d.speak();

//Object.setPrototypeOf()
const Animal = {
    speak() {
        console.log(this.name + " makes noise");
    }
};

class Dog {
  constructor(name) {
      this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // output Mitzie makes a noise.


//super class method call
class Cat {
  constructor(name) {
      this.name = name;
  }

  speak() {
      console.log(`${this.name} makes a noise`);
  }
  static eat(name) {
      console.log(`${name} eats rat`);
  }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars`);
    }
    static eat(name) {
        super.eat(name);
        console.log(`${name} eats deer`);
    }
}

let l = new Lion("Simba");
l.speak();
Lion.eat("Simba");

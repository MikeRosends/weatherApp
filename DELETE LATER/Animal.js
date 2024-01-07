class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound!!")
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log("Woof Woof!")
    }
}

const animal1 = new Animal("Dom");
const animal2 = new Dog("Jim")

animal1.makeSound()
animal2.makeSound()
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am ${this.name} and  I am ${this.age} years old`)
    }

}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);

        // Custom behaviour of the programmer
        this.yearsOfExperience = _yearsOfExperience
    }

    code() {
        console.log(`${this.name} is coding`)
    }
}

const programmers = [
    new Programmer("Dom", 25, 5),
    new Programmer("Jeff", 43, 17),
    new Programmer("Dominic", 25, 5),
    new Programmer("Goeffry", 43, 17)
]


function developerSoftware(programmers) {
    // Develop Software
    for (let programmer of programmers) {
        programmer.code();
    }
}

developerSoftware(programmers);

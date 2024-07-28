// Creating A Class And Then Creating A Constructor

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`\nThe Created Object Is As Follows : \n`,this);
    }
    talk() {
        console.log(`\nHello! I Am ${this.name}\nI Am ${this.age} Years Old\n`);
    }
}
let p1 = new Person(`Akshat`, 30);
p1.talk();
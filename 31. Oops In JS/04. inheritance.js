class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`\nHellow! I Am ${this.name}.\n`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
        console.log(`\nThe Newly Created Object Is : \n`,this,`\n`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
        console.log(`\nThe Newly Created Object Is : \n`,this,`\n`);
    }
}

let student1 = new Student(`Akshat`, 20, 98);
let teacher1 = new Teacher(`Alan`, 40, `Maths`);

console.log(student1.talk() === teacher1.talk(),`\n`);  // True
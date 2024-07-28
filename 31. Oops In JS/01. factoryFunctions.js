function PersonMaker(name, age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`\nHello! My Name Is ${this.name}\nI'm ${this.age} Years Old!\n`);
        }
    }

    return person;
}

let p1 =  PersonMaker(`Alan`, 20);
let p2 =  PersonMaker(`Akshat`, 20);
console.log(p1.talk() == p2.talk(),`\n`);   // False

// It Means For Both Both The Obects The Talk() Method's New Personal Instance Is Created Even When Both Of The Created By
// The Same Factory Method.
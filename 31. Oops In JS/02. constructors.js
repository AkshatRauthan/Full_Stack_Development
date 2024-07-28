// Directly Creating A Class By Initialing A Constructor
function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(`\nThe Created Object Is As Follows : \n`,this);
}
Person.prototype.talk = function(){ // Prototype Is Used To Directly Access All The Methods And Properties Of Objects.
    console.log(`\nHello! I Am ${this.name}\nI Am ${this.age} Years Old\n`);
}
let p1 = new Person(`Alan`, 20);
let p2 = new Person(`Akshat`, 20);
console.log(p1.talk() == p2.talk(),`\n`);   // True
// In This Case The talk() Method Is The Property Of The Prototype Rather Than The Indivisual Objects.

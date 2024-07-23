// Student1 Is An Object And all The Values Inside It Like Name, Age, City Are Its Onject Literals.
// Here We Are Defining It Constant So That Its Address Can't Be Changed. [Same Is Case With Arrays]
// By Doing So Its Reference An't Be Changed Or Swiped With That Of Others.
// However, We Can Still Change Its Literal's Values And Add MOre Values To It.

// Object Literals Keys Are Always Converted Into Keys Even If They Are Initialised As A Number.

const student1 = {
    name : "Akshat",
    age : 20,
    marks : 98.97,
    subjects : ["Maths", "Science", "English", "Hindi"],
    city : "Haridwar"
};

console.log(`\nThe Name Of Student Is : ${student1.name}\n`);
console.log(`The Age Of Student Is : ${student1["age" ]}\n`);
console.log(`The Marks Of Student Is : ${student1.marks}\n`);
console.log(`The Subjects Of Student Are : ${student1.subjects}\n`);
console.log(`The City Of Student Is : ${student1.city}\n`);
console.log(student1,"\n");

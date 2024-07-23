const student = {
    name: "Akshat Rauthan",
    age:20,
    course:"B. Tech.",
    username:"Lightning McAllan",
    password:"13#5FX#sr&#",
    subjects: ["Science", "Maths", "English", "Chemistry", "Physics", "Biology"]
};

// Using Default Values
let {username : id,
    password : pswd, 
    age : age, 
    name : username, 
    city:address="Haridwar"
    } = student;

console.log(`\n\nThe Name Of The Student Is : ${username}\n`);
console.log(`The User ID If The Student Is : ${id}\n`);
console.log(`The Age Of The Student Is : ${age}\n`);
console.log(`The Address Of The Student Is : ${address}\n`);
console.log(`The Password Of The Student Is : ${pswd}\n\n`);
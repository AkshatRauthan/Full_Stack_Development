const student = {
    name : "Akshat",
    age : 20,
    marks : 98.97,
    subjects : ["Maths", "Science", "English", "Hindi"],
    city : "Haridwar"
};
console.log("\n\nThe Initial Object Is : ");
console.log(student);


// Modifying Values
student.name += " Rauthan";
student.age = 19;
student.marks = 100;
student.subjects[4] = "History";
student.city = "Deteroit";
console.log("\n\nThe Object After Modification : ");
console.log(student);


// Adding New Values
student.gender = "Male";
student.qualification = "B.Tech CSE";
console.log("\n\nThe Object After Adding New Object Literals : ");
console.log(student);
// Write Function Called MergeObjects That Returns A New Object With All Properties Of The Two Argument Objects.

student1 = {
    name:"Akshat",
    age:20
};

student2 = {
    marks:100,
    city:"Haridwar"
}

function MergeObjects(student1, student2){
    return {
        ...student1,
        ...student2
    }
}

student = MergeObjects(student1, student2);

console.log(`\n\nThe First Parent Object is As Follows : \n\n`,student1);
console.log(`\n\nThe Second Parent Object is As Follows : \n\n`,student2);
console.log(`\n\nThe Final Merged Object Is As Follows : \n\n`,student,"\n\n");
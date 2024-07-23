// Creates A Reference To The Parent Object Of The CUrrent Scope Where It Is Used.
// In Case Of No Parent Objects Points To An Empty Window Object.
// Due To Which We Can Then Directly Access All The Global Variable Or Functions.
// The Highest Level Object In A JS Code Is Called the Window Object. 
// It Stores Our Complete Code In It.

// But For Arrow Functions => Thet Will Check In The Scope Of Their Parent.

const student = {
    name:"Akshat",
    age:20,
    marks : [90,93,83,85,79],
    getAvg(){
        console.log("\n",this,"\n");
        let totalMarks = 0;
        for (marks of this.marks) totalMarks += marks;
        return totalMarks / this.marks.length ;
    }
};

function greet(){
console.log(`\nThis Is An Example Of A Window Object : `);
console.log(this);
}

console.log(`\nThe Average Marks Of ${student.name} Is : ${student.getAvg()}\n`);
greet();
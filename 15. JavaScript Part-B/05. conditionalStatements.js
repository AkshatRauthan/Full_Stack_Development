const pie = 22/7;

// #) 01 : If Statement
if (pie == 22/7) console.log("The Value Of Pie Is Correct");
else console.log("The Value Of Pie Is Incorrect");

// #) 02 : Else If Statement.
if (pie == 3.14) console.log("The Value Of Pie Is 3.14");
else if (pie == 22/7) console.log("The Value Of Pie Is 22/7");
else console.log("The Value Of Pie Is Incorrect");

// #) 03 : Switch Statement.
let color = "red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready")
        break;
    case "green":
        console.log("Go")
        break;
    default:
        console.log("Invalid Color");
}

let min = 0, max = 0, input = 0, num = 0 , exit = 0;
exit = 1;

min = prompt("Enter The Starting Value Of The Range : ", 0);
max = prompt("Enter The Ending Value Of The Range : ", 0);

while (true){
    exit = prompt("Enter 1 To Continue The Game Or 0 To Quit The Game : ");
    if (exit == 0) break;
    input = prompt(`Guess A Number In The Range From ${min} To ${max} : `, 0);
    num = Math.ceil(Math.random()*(max - min)) + min;
    console.log(num);
    if (num == input){
        console.log("\n\n----------------------------------------------------");
        alert("Congratulations! You Guessed The Correct Number.");
        console.log("\nCongratulations! You Guessed The Correct Number.\n");
        console.log(`\nThe Generated Number Is ${num}\n`);
        console.log("----------------------------------------------------");
        break;
    }
    else {
        console.log("\n\n----------------------------------------------------");
        alert("Oops! The Number You Guessed Is Wrong.");
        alert(`The Generated Number Is : ${num}`);
        console.log("\nOops! The Number You Guessed Is Wrong.\n");
        console.log(`\nThe Generated Number Is ${num}\n`);
        console.log("----------------------------------------------------");
    }
}
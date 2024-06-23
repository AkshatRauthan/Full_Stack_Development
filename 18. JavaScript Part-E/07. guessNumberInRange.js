let min, max, input, num, exit;
exit = 1;

min = prompt("Enter The Starting Value Of The Range : ");
max = prompt("Enter The Ending Value Of The Range : ");

while (true){
    exit = prompt("Enter 1 To Continue The Game Or 0 To Quit The Game : ");
    if (exit == 0) break;
    input = prompt(`Guess A Number In The Range From ${min} To ${max} : `);
    num = Math.ceil(Math.random()*(max - min) + min);
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
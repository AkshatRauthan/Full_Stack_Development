//                                     Destructuring
// Storing Values Of An Array Into Multiple Variables.

let names = ["Akshat Rauthan", "Alan Walker", "Shraddha Khapra", "Anvesha Rauthan", "Pooja Vyas","Shashikant Yadav", "Yash Kumar", "Khushi Sharma"];
let [winner, runnerUp, secondRunnerUp, ...otherParticipants] = names;
console.log(`\n\n`);
console.log(`The Winner Of The Game Is : ${winner}\n`);
console.log(`The Runner-Up Of The Game Is : ${runnerUp}\n`);
console.log(`The Other Participants Of The Game Are :\n${otherParticipants}\n\n`);

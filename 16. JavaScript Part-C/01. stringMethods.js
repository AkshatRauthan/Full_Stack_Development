let a = "Alan Walker";

// Trim : remove whitespaces from end and starting fo string.
a = "   Alan Walker            ";
a = a.trim();
console.log(a+"\n");

// toUpperCase :
a = a.toUpperCase();
console.log(a+"\n");

// toLowerCase :
a = a.toLowerCase();
console.log(a+"\n");

// indexOf : 
console.log(a.indexOf("lan"));
console.log(a.indexOf("Alan") + "\n");

// Slicing : str.slice(starting_index, length_of_slice)
let str = "akshatRauthan";
console.log(str.slice(6)); // From 7th Index To Ending Of The String
console.log(str.slice(0,6)+"\n"); // From The 0th Index to The 5th index Of The String.

// Replace : str.replace(initial_sub_string, new_sub_string)
console.log(str.replace('a','0'));
console.log(str.replace("akshat","Akshat"));
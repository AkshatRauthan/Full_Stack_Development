// Write A Function Called Double And Return That Accepts Variable Number Of Arguments And Returns
// A New Array With All The Arguments Doubled.

function doubleAndReturn(...arr){
    return newArr = arr.map((el) => 2*el);
}

arr = doubleAndReturn(1,2,3,4,5,6,7,8,9,10);

console.log(`\n\nThe Returned Array Is :  `,...arr,"\n\n");
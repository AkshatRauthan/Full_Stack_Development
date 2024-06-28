//                               Rest Method
// Used To Define Functions Having Variable Number Of Arguments And Store Them In A Single Array.

//                               Argument Collection.
// In JS All The Arguments Passed On To A Function Are Automatically Stored In A Collection Named
// arguments. But We Still Use The Rest Method To Store All Of Them In An Array So That We Can Apply
// All The Basic And Advanced Array Methods On The Arguments.
// Remember Array Methods Like Push_Back, Pop, Every, Some, Reduce Do Not Work On argument Collection.


// Using arguments collection.
function sum(){
    console.log("\n\nExample Of Using arguments Collection :\n");
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        console.log(`The ${i}th Argument Is : ${arguments[i]}`);
        sum += arguments[i];
    }
    console.log(`\nThe Sum Of All The Arguments Is : ${sum}`);
    console.log("\n\n");
}


// Using Rest Method
function sum1(...args){
    console.log("Example Of Using Rest Method :\n");
    for (let i=0; i<args.length; i++){
        console.log(`The ${i}th Argument Is : ${args[i]}`);
    }
    let sum = args.reduce((sum, el) => sum += el);
    console.log(`\nThe Sum Of All The Arguments Is : ${sum}`);
    console.log("\n\n");
}

sum(2,5,9,34,345,678,789,890);
sum1(1,4,6,9,12,16,24,57,175);
// One To Many Relation : When A Single Set Of Values From One Collection Relates To Many Set of Values Of Other Collection.

// Case 1 : One To Few
// When The Number Of Related Values In Second Collection Are Less In Number For All The Values Of Main Collection.
// And The Data Values Of Second Collection Can't Be Used Indivisually.

// Implementation : Store The Child Document Inside Parent
// We Just Store The Second Collection's Data As An Array Or Nested Object In The Main Colection Instread
// Of Creating A Fully Fledged Collection. In Order To Save Storage Space And Reduce Complexity.
// For ex. : Multiple Addresses Of A User Stored In Apps Like Amazon, Swiggy, Ola etc.
// Here, A Single User Generally Do Not Have A Large Number of Addresses.

const mongoose = require(`mongoose`);
const {Schema} = mongoose;

main().then(() => console.log(`\nConnection Successfull\n`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/relationsDemo`);
};

const userSchema = new Schema({
    username : String,
    addresses : [{
        _id : false,        // No Id Will be Created For Indivisual Addresses
        location : String,
        city : String
    }]
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username : "Sherlock Holmes",
        addresses : [
            { location : "221B Baker Street" , city : "London"},
            { location : "4th Downing Street", city : "London"},
        ]
    });

    console.log(await user1.save());
};

addUsers();
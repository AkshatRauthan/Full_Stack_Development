const mongoose = require(`mongoose`);
async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/test`);
}
main()
.then( () => console.log(`\nConnection Successfull\n`))
.catch( err => console.log(err));

const userSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Age : Number
});
const User = mongoose.model("User", userSchema);


// The Model.find() Method Do Not Return A Promise.
// It Returns A Query Object But We Can Still Use .then() And .catch Statements With It => Thennable Object.
User.find({})
    .then( (result) => {
        console.log("\n\nThe Data Of All The Users Is As Follows : ")
        console.log(result);
    })
    .catch( (error) => {
        console.log(error);
    });


// Using Conditions :
User.find({Age : {$gt : 50}})
    .then( (result) => {
        console.log(`\n\nName Of Users With Age Greater Than 50 : `);
        for (obj of result){
            console.log(`Name : ${obj.Name}\t Age : ${obj.Age}`);
        }
    })
    .catch( (error) => {
        throw error;
    });


// Using FindOne Function :
// FindOne() Command Will Be Executed First In The Whole Program While Find Command Will Be Executed After It.
User.findOne({Name : "Akshat"})
    .then( (result) => {
        console.log(`\n\nThe Detail of The First User With Name Akshat : `);
        console.log(result);
    })
    .catch( (error) => {
        throw error;
    });

User.find({Name : "Akshat"})
    .then( (result) => {
        console.log(`\n\nThe Details Of All The Users With Name Akshat : `);
        console.log(result);
    })
    .catch( (error) => {
        throw error;
    });

// Using FindById() :
User.findById("66b763e04160c5f29e6110a8")
    .then( (result) => {
        console.log("\n\nThe Details Of The Student With The Id 66b763e04160c5f29e6110a8 Is :");
        console.log(result);
    })
    .catch( (error) => {
        throw error;
    })
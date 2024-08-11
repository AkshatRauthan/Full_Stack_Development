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
})

const User = mongoose.model("User", userSchema);

const user1 = new User({Name : "Akshat", Email : "akshat1@gmail.com", Age : 20});
const user2 = new User({Name :  "Alan",  Email : "alan123@gmail.com", Age : 19});

user1.save();
user2.save();
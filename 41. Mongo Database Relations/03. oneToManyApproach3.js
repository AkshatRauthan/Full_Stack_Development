// One To Many Relation : When A Single Set Of Values From One Collection Relates To Many Set of Values Of Other Collection.
 
// Case 3 : One To Squillions
// When The Number Of Related Data Objects Present In The Parent Object Is Very Very Large.

// For ex : Databases Of Apps Like Instagram.
// Where A Single User Can View, Like, Comment Or Create Millions Of Posts Practically.

// Implementation : Store A Reference To The Parent Document Inside Child.
// Here We Will Simply Create An Another Collection For Our Child Objects And Store A Reference To Their Parent Inside Them.
// Just Opposite Of What We Did In The Case Of One To Many Approach 2.


const mongoose = require(`mongoose`);
const {Schema} = mongoose;

main().then(() => console.log(`\nConnection Successfull\n`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/relationsDemo`);
};

// Creating Collection User
const userSchema = new Schema({
    username : String,
    email : String
});
const User = mongoose.model("User", userSchema);

// Creating Collection Posts
const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});
const Post = mongoose.model("Post", postSchema);

// Adding A New User And Post
const addData = async() => {
    const user1 = new User({
        username : "krit",
        email : "imkvm6@gmail.com"
    });
    const post1 = new Post({
        content : "You know who I'm",
        likes : 120
    });
    post1.user = user1;

    await user1.save();
    await post1.save();
};

addData();
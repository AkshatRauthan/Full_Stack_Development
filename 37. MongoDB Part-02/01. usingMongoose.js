const mongoose = require(`mongoose`);

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/test`);
}

main()
.then( () => console.log(`\nConnection Successfull\n`))
.catch( err => console.log(err));
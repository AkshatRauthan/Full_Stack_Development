function SaveToDb(data, type){
    return new Promise((resolve, reject) => {
        let internetSpeed = 1 + Math.floor(Math.random() * 10);
        if (internetSpeed > 4){
            resolve(`Success ==> Saved ${data}`);
        }
        else reject(`Fail ==> Can't Save ${data}`);
    })
}
SaveToDb("Name : Akshat Rauthan", "Name")
    .then((result) => {
        console.log(`\n`+result);
        return SaveToDb("Age : 20", `Age`);
    })
    .then((result) => {
        console.log(result);
        return SaveToDb(`Gender : Male`, `Gender`);
    })
    .then((result) => {
        console.log(result,`\n`);
    })
    .catch((error) => {
        console.log(error,`\n`);
    });
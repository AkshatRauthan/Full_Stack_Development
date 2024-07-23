// Practical Example Of Callback Hell

function SaveToDb(data, Success, Failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) Success();
    else Failure();
}
console.log(`\n`);
SaveToDb("Name : Akshat Rauthan",
    () => {
        console.log(`01. Name Successfully Saved.`);
        SaveToDb("Age : 20",
            () => {
                console.log(`02. Age Successfully Saved.`);
                SaveToDb("Gender : Male",
                    () => {
                        console.log(`03. Gender Successfully Saved.`);
                    },
                    () => {
                        console.log(`03. Gender Failed To Save Due To Weak Connection.`);
                    }
                );
            },
            () => {
                console.log(`02. Age Failed To Save Due To Weak Connection.`);
            }
        );
    },
    () => {
        console.log(`01. Name Failed To Save Due To Weak Connection.`);
    }
);
console.log(`\n`);
const mysql = require(`mysql2`);
const {faker} = require(`@faker-js/faker`);

const connection = mysql.createConnection({
    host : `localhost`,
    user : `root`,
    database : `APP`,
    password : `akshat`
});

let query = `INSERT INTO USER VALUES (?, ?, ?, ?);`

function insertIntoUser(){
    let arr = [ 
        faker.string.uuid(),          // Id
        faker.internet.userName(),      // Username
        faker.internet.email(),         // Email
        faker.internet.password({length : 8, memorable : true})      // 8 Digit Password
    ];

    try{
        connection.query(query, arr, (error, result) => {
            if (error) console.log(error);
        })
    }
    catch(error){
        throw error;
    }
}

for (let i=1; i<=25; i++){
    insertIntoUser();
    console.log(i);
}

connection.end();
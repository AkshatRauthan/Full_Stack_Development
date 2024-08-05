const mysql = require(`mysql2`);
const fs = require(`fs`);

const connection = mysql.createConnection({
    host : `localhost`,
    user : `root`,
    database : `APP`,
    password : `akshat`
});

const queries = fs.readFileSync(`03. createTable.sql`, 'utf8');

try {
    connection.query(queries, (error, result) => {
        console.log(`\n`);
        if (error) console.log(error);
        else console.log(result);
    });
}
catch(error){
    console.log(error);
}

try {
    connection.query(`SHOW TABLES`, (error, result) => {
        console.log(`\n`);
        if (error) console.log(error);
        else console.log(result);
        console.log(`\n`);
    });
}
catch(error){
    console.log(error);
}

connection.end();
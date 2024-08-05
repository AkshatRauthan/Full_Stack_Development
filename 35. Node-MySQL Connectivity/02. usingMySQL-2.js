const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host : `localhost`,
    user : `root`,
    database : `APP`,
    password : `akshat`
});

try {
    connection.query("SHOW TABLES", (error, result) => {
        if (error) throw error;
        else console.log("\n",result,"\n");
    });
}
catch(error) {
    console.log(error);
}

connection.end();
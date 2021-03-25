const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "media",
});

con.connect()

    const sql = "INSERT INTO books(book_title) VALUES('Area 51')";

    con.query(sql, function(err){
        if(err){
            console.log(err)
        }else{
        console.log("1 record inserted");
        }
    });

    con.query("SELECT * FROM movies", function(err,result){
        if(err){
            console.log(err)
        }else{
        console.log(result);
        }
    });

    con.query("UPDATE music SET music_title = 'wolves' WHERE music_title = 'Panic at the Disco'", function(err){
        if(err){
            console.log(err);
        }
    });

    con.query("DELETE FROM movies WHERE movie_id = 1", function(err){
        if(err){
            console.log(err);
        }
    });
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")

const app = express();

const saltRounds = 10;
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded ({ extended: true }));

app.use(
    session({
        key: "userID",
        secret: "test",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "ridentaldb"
});

app.post('/iscriviti', (req, res) => {

    const Nome = req.body.nome;
    const Cognome = req.body.cognome;
    const CF = req.body.cf;
    const Email = req.body.email;
    const Password = req.body.password;

    bcrypt.hash(Password, saltRounds, (err, hash) => {
        db.query(
            "INSERT INTO Pazienti (CF, Nome, Cognome, Email, Password) VALUES (?,?,?,?,?)",
            [CF, Nome, Cognome, Email, hash],
            (err, result) =>{
                console.log(err);
            });
    })
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, utente: req.session.user })
    } else {
        res.send({loggedIn: false })
    }
})

app.post('/login', (req, res) => {

    const Email = req.body.emailUser;
    const Password = req.body.passwordUser;

    db.query(
        "SELECT * FROM Pazienti WHERE Email = ?;",
        Email,
        (err, result) =>{
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0){
                bcrypt.compare(Password, result[0].Password, (error, response) => {
                    if (response){
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({message: "Email o Password sbagliati"});
                    }
                })
            }
            else {
                res.send({message: "Utente inesistente"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running server!");
});
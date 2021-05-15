const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');

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
app.use(bodyParser.urlencoded ({ extended: false }));

app.use(bodyParser.json());
process.env.SECRET_KEY = 'TEST';


app.use(
    session({
        key: "userID",
        secret: "Zu*d9FnRcFUXSnG]`T`yEgcQHYU8m[GDMmtRjc)ve5Q$lxN|0UqSWf)hQmqxyKRbM;pxwbQ6D$Zg7)ySgMqFmncbQZ9whP5wPh",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24 * 24,
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
                res.send(result);
            });
    })
});

app.post('/prenotazione', (req, res) => {
    console.log("entrato nel post")
    if (req.headers && req.headers.authorization) {
        let authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        console.log("entrato nel if")


        const Giorno = req.body.giorno;
        const Orario = req.body.orario;
        const Visita = req.body.visita;
        const Note = req.body.note;

        let codiceFiscale = decoded.cf;
        // Fetch the user by id
        db.query(
            "INSERT INTO Appuntamenti (dataappuntamento, orarioappuntamento, costoappuntamento, tipologiaappuntamento, note, cod_studiomedico, cod_cf) " +
            "VALUES (?, ?, NULL, ?, ?, " +
            "   (SELECT s.ID_StudioMedico FROM StudiMedici s, Assegnazioni a, Odontoiatri o, Appuntamenti ap\n" +
            "       WHERE s.ID_StudioMedico = a.COD_StudioMedico\n" +
            "       AND o.Matricola = a.COD_Matricola\n" +
            "       AND ap.DataAppuntamento = a.DataAssegnazione\n" +
            "       AND a.DisponibilitaStudio = 1" +
            "       LIMIT 1), ?);",
            [Giorno, Orario, Visita, Note, codiceFiscale],
            (err, result) =>{
                db.query(
                    "UPDATE Appuntamenti\n" +
                    "SET CostoAppuntamento = (SELECT v.Costo\n" +
                    "                         FROM Visite v\n" +
                    "                         WHERE v.Tipologia = ?)\n" +
                    "WHERE CostoAppuntamento IS NULL;",
                    Visita,
                )
                db.query(
                    "\n" +
                    "INSERT INTO Assegnazioni (DisponibilitaStudio, DataAssegnazione, COD_Matricola, COD_StudioMedico) VALUES (1, ?, " +
                    "(SELECT o.Matricola FROM Odontoiatri o, Appuntamenti a, Visite v\n" +
                    "   WHERE v.ID_Visita = o.COD_Visita\n" +
                    "   AND v.SpecRichiesta = o.Specializzazione\n" +
                    "   AND a.TipologiaAppuntamento = ? LIMIT 1),\n" +
                    "(SELECT s.ID_StudioMedico FROM StudiMedici s, Assegnazioni a, Odontoiatri o, Appuntamenti ap\n" +
                    "   WHERE s.ID_StudioMedico = a.COD_StudioMedico\n" +
                    "   AND o.Matricola = a.COD_Matricola\n" +
                    "   AND ap.DataAppuntamento = a.DataAssegnazione\n" +
                    "   AND a.DisponibilitaStudio = 1 LIMIT 1));",
                    [Giorno, Visita]
                )
                console.log(err);
                console.log(result)
                res.send(result);
        });


    }

});


app.get('/profilo', (req,res) => {

    if (req.headers && req.headers.authorization) {
        let authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        let codiceFiscale = decoded.cf;
        // Fetch the user by id
        db.query(
            "SELECT p.CF, p.Nome , p.Cognome FROM Pazienti p WHERE p.CF = ?;",
            codiceFiscale,
            (err, result) =>{
                res.send(result);
                console.log(result)
            }
        )
    }
});

app.get('/prestazioni', (req,res) => {

    if (req.headers && req.headers.authorization) {
        let authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        let codiceFiscale = decoded.cf;
        // Fetch the user by id
        db.query(
            "SELECT p.CF, a.TipologiaAppuntamento, a.CostoAppuntamento,  a.DataAppuntamento, a.OrarioAppuntamento, a.COD_StudioMedico AS NumeroStudio FROM Pazienti p, Appuntamenti a WHERE p.CF = a.COD_CF AND p.CF = ?;",
            codiceFiscale,
            (err, result) =>{
                res.send(result);
                console.log(result)
            }
        )
    }
});

app.get('/esami-digitali', (req,res) => {

    if (req.headers && req.headers.authorization) {
        let authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        let codiceFiscale = decoded.cf;
        // Fetch the user by id
        db.query(
            "SELECT p.CF, ef.Tipologia, ef.DataEsame FROM Pazienti p, EsamiEffettuati ef, EsamiDigitali e WHERE e.ID_Esame = ef.COD_Esame AND p.CF = ef.COD_CF AND p.CF = ?;",
            codiceFiscale,
            (err, result) =>{
                res.send(result);
                console.log(result)
            }
        )
    }
});

app.get("/login/check", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, utente: req.session.user })
    } else {
        res.send({loggedIn: false })
    }
});

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
                    if (response) {
                        let token = jwt.sign({ cf: result[0].CF }, process.env.SECRET_KEY, {expiresIn: '1h'}, (err, token) => {
                            if (err) {
                                console.error(err.message);
                                res.send({status: err.message})
                            } else {
                                res.send({token: token, message: "Accesso eseguito"});
                            }
                        })
                    } else {
                        res.send( { message: "Email o password sbagliata"})
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
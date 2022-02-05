const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "03222527l",
    database: "cruddatabse",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req,res) => {
    const sqlGet = "SELECT * FROM registro";
    db.query(sqlGet, (err,result) => {
        res.send(result)
    });
})

app.delete('/api/deletar/:nomeComp', (req, res) => {
    const nome = req.params.nomeComp
    const sqlDeletar = "DELETE FROM registro WHERE nomeComp = ?";
    db.query(sqlDeletar, nome, (err,result) => {
       if(err) console.log(err);
    });
});

app.put('/api/atualizar', (req, res) => {
    const nome = req.body.nomeComp;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const sqlTualizar2 = "UPDATE registro SET email = ? WHERE nomeComp = ?";
    const sqlTualizar3 = "UPDATE registro SET telefone = ? WHERE nomeComp = ?";

    db.query(sqlTualizar2, [email,nome], (err,result) => {
       if(err) console.log(err);
    });
    db.query(sqlTualizar3, [telefone,nome], (err,result) => {
        if(err) console.log(err);
     });
});


app.post("/api/insert", (req,res) => {
    const nomeComp = req.body.nomeComp;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const sqlInserir = "INSERT INTO registro (nomeComp, email, telefone) VALUES (?,?,?)";
    db.query(sqlInserir, [nomeComp, email, telefone], (err,result) => {
        console.log(result);
    })
});
app.listen(3001, () => {
    console.log('running on ports 3001');
});

app.use(bodyParser.urlencoded({extended: true}));
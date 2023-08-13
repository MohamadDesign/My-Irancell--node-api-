const express = require("express");
const cors = require("cors");
const IrancellDB = require('./DB/MyIrancellDB')
const app = express();
app.use(cors())

app.get("/api/users", (req, res) => {
    let userToken = req.headers.authorization;
    let getUserQuery = `SELECT * FROM users WHERE token = ${userToken}`;
    IrancellDB.query(getUserQuery, (err, result) => {
        if (err) {
            res.send(null);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

app.get("/api/services/:isActive", (req, res) => {
    let isActive = req.params.isActive;
    let getServiceQuery = `SELECT * FROM services WHERE isActive = ${isActive}`;
    IrancellDB.query(getServiceQuery, (err, result) => {
        if (err) {
            res.send(null);
        } else {
            res.send(result);
        }
    });
});

app.get("/api/recommended-packet", (req, res) => {
    let userToken = req.headers.authorization;
    let getPacketQuery = `SELECT * FROM recommended table WHERE userID = 1`;
    IrancellDB.query(getPacketQuery, (err, result) => {
        if (err) {
            res.send(null);
        } else {
            res.send(result);
        }
    });
});

app.get("/api/userProduct", (req, res) => {
    let userToken = req.headers.authorization;
    let getUserProductsQuery = `SELECT * FROM sales WHERE userID=1`;
    IrancellDB.query(getUserProductsQuery, (err, result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
});
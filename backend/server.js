const express = require("express");
const cors = require("cors");
const IrancellDB = require("./DB/MyIrancellDB");
const getUserID = require("./utils/funcs");
const app = express();
app.use(cors());

app.get("/api/users", (req, res) => {
    let userToken = req.headers.authorization;
    let getUserQuery = `SELECT * FROM users WHERE token = "${userToken}"`;
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
    let userID = null;
    getUserID(userToken).then((result) => {
        userID = result[0].id;
        let getPacketQuery = `SELECT * FROM recommend WHERE userID = ${userID}`;
        IrancellDB.query(getPacketQuery, (err, result) => {
            if (err) {
                res.send(null);
            } else {
                res.send(result);
            }
        });
    });
});

app.get("/api/userProduct", (req, res) => {
    let userToken = req.headers.authorization;
    let userID = null
    getUserID(userToken).then(result => {
        userID = result[0].id;
        let getUserProductsQuery = `SELECT * FROM sales WHERE userID = ${userID}`;
        IrancellDB.query(getUserProductsQuery, (err, result) => {
            if (err) {
                res.send(null);
            } else {
                res.send(result);
            }
        });
    });
});

app.listen(3000);

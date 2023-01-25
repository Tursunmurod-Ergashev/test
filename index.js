const express = require("express");
const mongoose = require("mongoose");
const nameControoler = require("./router/index")
const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {

        console.log("mongdb ga ulanish hosil qilindi...")
    })
    .catch((error) => {
        console.log("ulana olmadik hay...");
    })

app.post("/api", nameControoler.findPost)

app.get("/api", nameControoler.findGet)

app.get("/api/:id", nameControoler.findGetId)

app.put("/api/:id", nameControoler.findPutId)

app.delete("/api/:id", nameControoler.findDeleteIf)


app.listen(3000, () => {
    console.log(`${3000} chrome is conectet...`);
})
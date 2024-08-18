const express = require('express');
const app = express();
const mongoose = require("mongoose");
const listing = require("../node_modules/listing.js");
app.get('/', (req, res) => {
    res.send("hii i am rucha")
});

const MONGO_URL = "mongodb://127.0.0.1:27017/test/wanderfull";

main().then(() => {
    console.log("connected to DB")

}).catch(Error => {
    console.log(Error);
});


async function main()
{
    await mongoose.connect("MONGO_URL")
        
    };

    app.get("/testListing", async (req, res) => {
        let samplelesting = "New Listing"({
            title: "Fashion ",
            description: "Fashion with me", 
            country: "india",
        });

        await samplelesting.save();
        console.log("sample was send"),
        res.send("Sucssesful testing")
    });
    app.listen(8080, () => {
        console.log("server is listning to post 8080");
    });
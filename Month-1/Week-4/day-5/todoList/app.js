const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", (req,res) => {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    switch(currentDay){
        case 0:{
            day="Sunday";
            break;
        }
        case 1: {
            day = "Monday";
            break;
        }
        case 2: {
            day = "Tuesday";
            break;
        }
        case 3: {
            day = "Wednesday";
            break;
        }
        case 4: {
            day = "Thursday";
            break;
        }
        case 5: {
            day = "Friday";
            break;
        }
        case 6: {
            day = "Saturday";
            break;
        }
        default: {
            console.log(`The value of currentDay is ${currentDay}`);
        }
    };


        // res.sendFile(`${__dirname}/index.html`);
        res.render("index", {
            kindOfday:day
        });
})

app.listen("3000", () => {
    console.log("server is running in port 3000");
})
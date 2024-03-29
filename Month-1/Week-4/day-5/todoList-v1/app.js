const express = require("express");
const bodyParser = require("body-parser");

let lists = ["eat","sleep","code"];

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
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

    res.render("list", {
        kindOfDay: day,
        listData: lists
    });
});

app.post("/", (req, res) => {
    let list = req.body.textInput;

    lists.push(list);

    res.redirect("/");
})

app.listen("3000", () => {
    console.log("Server is running in port 3000");
});
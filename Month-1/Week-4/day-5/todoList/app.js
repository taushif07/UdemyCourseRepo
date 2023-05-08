const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`);
 
const app = express();

let itemsArr = ["Eat","Sleep","Code"];
let worksArr = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req,res) => {



    const day = date.getDate();

    // switch(currentDay){
    //     case 0:{
    //         day="Sunday";
    //         break;
    //     }
    //     case 1: {
    //         day = "Monday";
    //         break;
    //     }
    //     case 2: {
    //         day = "Tuesday";
    //         break;
    //     }
    //     case 3: {
    //         day = "Wednesday";
    //         break;
    //     }
    //     case 4: {
    //         day = "Thursday";
    //         break;
    //     }
    //     case 5: {
    //         day = "Friday";
    //         break;
    //     }
    //     case 6: {
    //         day = "Saturday";
    //         break;
    //     }
    //     default: {
    //         console.log(`The value of currentDay is ${currentDay}`);
    //     }
    // };


        // res.sendFile(`${__dirname}/index.html`);
        res.render("index", {
            listTitle:day, 
            listItems:itemsArr
        });
});

app.post("/", (req,res) => {
  let newItem = req.body.todoItem;

  console.log(req.body)

  if(req.body.button === "Work"){

    worksArr.push(newItem);

    res.redirect("/work");

  } else {

    itemsArr.push(newItem);

    res.redirect("/");

  }



});

app.get("/work" , (req,res) => {
    res.render("index", {
        listTitle: "Work List",
        listItems: worksArr,
    });
});

app.listen("3000", (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("server is running in port 3000");
    }
});
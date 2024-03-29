const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/signup.html`);
});


app.post("/", (req,res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/6de661d0cc";

    const options = {
        method: "POST",
        auth: "taushif07:5cc0a8c2a72cd529188abeeab4a1762c-us21",
    };

    const request = https.request(url, options, (response) => {

        if(response.statusCode === 200) {
            res.sendFile(`${__dirname}/success.html`);
        }else {
            res.sendFile(`${__dirname}/failure.html`);
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });
    
    request.write(jsonData);
    request.end();

    console.log(firstName,lastName,email);
});


app.post("/failure", (req,res) => {
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("server is running in port 3000");
});



// api key :- 
// 5cc0a8c2a72cd529188abeeab4a1762c-us21

// Audiance ID :- 
// 6de661d0cc
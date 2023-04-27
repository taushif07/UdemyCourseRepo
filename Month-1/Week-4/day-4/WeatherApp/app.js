const express = require("express");

const https = require("https");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {

    res.sendFile(`${__dirname}/index.html`);

});

app.post("/", (req,res) => {
        
    const city = req.body.cityName;
    const unit = "metric";
    const apiKey = "7c1de4f6fc491164461379b28da18226";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    https.get(url, (respond) => {
        respond.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`
            
            res.write(`<p>The weather in ${city} is currently ${desc}</p>`);
            res.write(`<h1>The temperature in ${city} is ${temp} degree Celcius</h1>`)
            res.write(`<img src=${iconUrl}>`);

            res.send();

        });
    });

});

app.listen(3000, () => {
    console.log("server is running in port 3000");
});
let Div = document.getElementById("main");

let name = "Taushif";

let concatenation = `Hey ${name} welcome back`;

console.log(concatenation);

let tweet = prompt("Give your feedback");

console.log(`You have typed ${tweet.length} characters, remaining Characters left is ${140-tweet.length}`);

let tweetSliceCharacters = tweet.slice(0,140);

// alert(tweetSliceCharacters);
console.log(tweetSliceCharacters);

let character = prompt("Enter your Name");

let firstChar = character.slice(0,1).toUpperCase();

let restChar = character.slice(1,character.length).toLowerCase();

alert(`Hello ${firstChar+restChar}`);

console.log(firstChar+restChar);

// convertor

let humanAge = (((Number(prompt("Enter Your Dog's Age"))-2)*4) + 21);

console.log(humanAge);

alert(`Your Dog's age is ${humanAge} in humanAge.`);

// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

 const getMilk = (money,price) => {
    console.log(`buy ${bottlesCount(money,price)} bottles of Milk.`);
    return (moneyLeft(money,price));
 };

 const bottlesCount = (money, bottleCost) => {
    return (Math.floor(money/bottleCost));
 };

 const moneyLeft = (money,bottleCost) => {
    return (money%bottleCost);
 };

 let change = getMilk(20,2.3);
 console.log(`You have ${change} left in your wallet.`);

 // BMI calculator  :- 

//  Create a BMI calculator using JavaScript functions. 

// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

// You can calculate it using the formula below, where weight divided by height squared.





// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.

// The first parameter should be the weight and the second should be the height.


const bmiCalculator = (weight,height) => {
    const bmi = weight/(height*height);
    return (Math.round(bmi));
};


const myBMI = bmiCalculator(70,1.82);

console.log(myBMI);



const randomNumber1 = Math.floor(Math.random()*6) + 1;

const randomNumber2 = Math.floor(Math.random()*6) + 1;

console.log(randomNumber1,randomNumber2);

const image1 = `./images/dice${randomNumber1}.png`;

const image2 =   `./images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", image1 );

document.querySelector(".img2").setAttribute("src", image2);

let result = document.querySelector("#title");


function diceResult(randomNumber1,randomNumber2) {
    if(randomNumber1 === randomNumber2){
        result.textContent = "Draw!";
    }else if (randomNumber1>randomNumber2){
        result.textContent = "Player1 wins! 🚩";
    }else if(randomNumber1<randomNumber2){
        result.textContent = "Player2 wins! 🚩";
    }
};


diceResult(randomNumber1,randomNumber2);
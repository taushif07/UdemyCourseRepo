let level = 0;
let started = false;

let gamePattern = [];
let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

$(document).keypress( () => {
    if(!started){
        $(`#level-title`).text(`level ${level}`);
        nextSequence();
        started = true;
    }
});

$(".btn").click( (event) => {

    let userChosenColour = $(event.target).attr("id");
    console.log($(event.target).attr("id"));

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});



const checkAnswer = (currentLevel) => {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout( () => {
                nextSequence();
            },1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout( () => {
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}; 



const nextSequence = () => {

    userClickedPattern = [];

    level++;

    $(`#level-title`).text(`level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

};       



const animatePress = (currentColour) => {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout( () => {
        $(`#${currentColour}`).removeClass("pressed");
    },100);
};


const playSound = (name) => {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
};


const startOver = () => {
    level = 0;
    started = false;
    gamePattern = [];
}

let drumArray = document.querySelectorAll(".drum");

for(let i=0;i<drumArray.length;i++) {

    drumArray[i].addEventListener("click", function () {
      
        const buttonElement = this.textContent;
        switchCase(buttonElement);
        buttonAnimation(buttonElement);
    })


}

document.addEventListener("keydown", function (event) {
    switchCase(event.key);
    buttonAnimation(event.key);
})


const switchCase = (btn) => {
    switch (btn) {
        case "w":{
            const tom1 = new  Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        }
        case "a":{
            const tom2 = new  Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        }
        case "s":{
            const tom3 = new  Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        }
        case "d":{
            const tom4 = new  Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        }
        case "j":{
            const snare = new  Audio ("sounds/snare.mp3");
            snare.play();
            break;
        }        
        case "k":{
            const crash = new  Audio ("sounds/crash.mp3");
            crash.play();
            break;
        }
        case "l":{
            const kickBass = new  Audio ("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        }
        default:{
            console.log(btn);
            break;
        }
    }
}


const buttonAnimation = (btn) => {

    if(btn==="w" || btn==="a" || btn==="s" || btn==="d" || btn==="j" || btn==="k" || btn==="l") {
        let activeButton = document.querySelector("."+btn);

        activeButton.classList.add("pressed");
    
        const interval = setTimeout(function () {
            activeButton.classList.remove("pressed");
        },100);
    } else {
        console.log(btn);
    }

}
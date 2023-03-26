// Array Concepts

let getList = ["Taushif", "Mirul", "Raazi", "Dev", "Zeenat"];

const Name = prompt("Enter your name");

if(getList.includes(Name)){
    alert(`Welcome ${Name} in our home page`);
}else {
    alert(`Sorry ${Name} you have to Log In first`);
}


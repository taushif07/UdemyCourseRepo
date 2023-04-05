document.querySelector(".button").addEventListener("click",LOGIN);
    
function LOGIN(){
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let id=document.querySelector("#password").value;

    if (name==localStorage.getItem("Name") && email==localStorage.getItem("Email") && id==localStorage.getItem("ID")){
        alert("Welcome " + name + " You have logged in Successfully");
        window.location.href = "index.html";
    } else if(name!=localStorage.getItem("Name") && email==localStorage.getItem("Email") && id==localStorage.getItem("ID")){
        alert("enter correct name");
    } else if(name==localStorage.getItem("Name") && email!=localStorage.getItem("Email") && id==localStorage.getItem("ID")) {
        alert("enter correct email");
    } else if(name==localStorage.getItem("Name") && email==localStorage.getItem("Email") && id!=localStorage.getItem("ID")) {
        alert("enter correct password");
    } else {
        alert("sorry, You have to signin first");
        window.location.href = "signup.html";
    }
}

      let email=localStorage.getItem("email");
      console.log(email);
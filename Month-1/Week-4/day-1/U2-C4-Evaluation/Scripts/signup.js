           
        document.querySelector(".button").addEventListener("click",myFunction);
        
        function myFunction(){
         let name=document.querySelector("#name").value;
         let email=document.querySelector("#email").value;
         let id=document.querySelector("#password").value;
        //  let button=document.querySelector(".button");
         localStorage.setItem("Name",name);
         localStorage.setItem("Email",email);
         localStorage.setItem("ID",id);
         if(name=="" || email=="" || id==""){
          alert ("Please Enter the details");
         }else{
          alert ("Signed Up Successfully");
          window.location.href = "login.html";
         }
        }
         
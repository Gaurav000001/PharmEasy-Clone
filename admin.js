// Akash chandra mishra  //

const loginBtn = document.querySelectorAll(".login-btn"),
registerBtn = document.querySelectorAll(".register-btn"),
lostPassBtn = document.querySelectorAll(".lost-pass-btn"),
box = document.querySelector(".box"),
loginForm = document.querySelector(".login-form"),
registerForm = document.querySelector(".register-form"),
lostPasswordForm = document.querySelector(".lost-password-form");

registerBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
box.classList.add("slide-active");
registerForm.classList.remove("form-hidden");
loginForm.classList.add("form-hidden");
lostPasswordForm.classList.add("form-hidden");
});
});

loginBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
box.classList.remove("slide-active");
registerForm.classList.add("form-hidden");
loginForm.classList.remove("form-hidden");
lostPasswordForm.classList.add("form-hidden");
});
});

lostPassBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
registerForm.classList.add("form-hidden");
loginForm.classList.add("form-hidden");
lostPasswordForm.classList.remove("form-hidden");
});
});

document.querySelector("#Register-form").addEventListener("submit",addDetails);
var arr =  JSON.parse(localStorage.getItem("Details")) || [];

function addDetails(event){
event.preventDefault();

var first = document.querySelector("#first-name").value;
var last = document.querySelector("#last-name").value;
var email = document.querySelector("#register-email").value;
var password = document.querySelector("#register-password").value;

var databaseObj = {
fst : first,
lst : last,
email : email,
password : password
};

    // adding all information in the arr
arr.push(databaseObj);
console.log(arr);
    
   // saveing data on database of browser
localStorage.setItem("Details",JSON.stringify(arr));
alert("Registration Successful");
window.location.href = "signup.html"
   // added login page here
}

document.querySelector("#login-form").addEventListener("submit",login);
var dataBase = JSON.parse(localStorage.getItem("Details"));
// console.log(dataBase)

// checking Credential here
function login(event){
event.preventDefault()
var email = document.querySelector("#login-email").value;
var pass = document.querySelector("#login-password").value;
 var flag=0;
for(var i=0;i<dataBase.length;i++){
   if(dataBase[i].email == email && dataBase[i].password == pass){
       flag=1;
       break;
   }
    }; 
if(flag==1){
   alert("Login Successful");
 window.location.href = "adminpage.html";
}
else if(flag==0){
   alert("Wrong Credentials");
}
}
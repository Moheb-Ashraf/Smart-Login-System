//! sign up
var signUpName=document.getElementById("signName");
var signUpEmail=document.getElementById("signEmail");
var signUpPassword=document.getElementById("signPassword");
var error=document.getElementById("error");
var errorEmail=document.getElementById("error-Email");
var user;
var EmailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

if(localStorage.getItem('user')==null){
    user=[];
}
else{
    user=JSON.parse(localStorage.getItem('user'))
}

function isEmailExist() {
    for (var i = 0; i < user.length; i++) {
        if (user[i].Email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}

 

function addUser(){
    if(validate(EmailRegex,signEmail)){
    var userData={
        Name:signUpName.value,
        Email:signUpEmail.value,
        password:signUpPassword.value
    }
    user.push(userData);
    localStorage.setItem('user',JSON.stringify(user));
    clearDataFromInput();
    error.innerHTML=`<p class="text-success">Success</p>`;
    errorEmail.innerHTML=``;
}
else{
    errorEmail.innerHTML=`<p class="text-danger text-start">your email is wrong</p>`;
    error.innerHTML=``;
    signUpEmail.value='';
}
}
function enterData(){
    if(signUpName.value=='' || signUpEmail.value=='' || signUpPassword.value==''){
        error.innerHTML=`<p class="text-danger">All inputs is required</p>`;
    }
    else if (isEmailExist() == false) {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">email already exists</span>'}
    else{
        addUser();
    }
}

function clearDataFromInput(){
    signUpName.value='';
    signUpEmail.value='';
    signUpPassword.value='';
}

function validate(regex,element){
    if(regex.test(element.value)){
        return true;
    }
    else{
        return false;
    }
}





//!sign in


var loginEmail=document.getElementById("loginEmail");
var loginPassword=document.getElementById("loginPassword");
var loginTest=document.getElementById("login-test")
function testInputs(){
    if(loginEmail.value=='' || loginPassword.value==''){
        loginTest.innerHTML=`<p class="text-danger">All inputs is required</p>`;
    }
    else{
        check();
    }
}

function check(){
    for(var i=0; i<user.length; i++){
        if(loginEmail.value==user[i].Email&&loginPassword.value==user[i].password){
            var y = user[i].Name;
            localStorage.setItem('name',y);
            location.href =  '../home.html';
            break;
        }
        else{
            loginTest.innerHTML=`<p class="text-danger">incorrect email or password</p>`;
        }
}
}


//!home

var userName=document.getElementById("name");
userName.innerHTML=localStorage.getItem("name");


function logout(){
    localStorage.removeItem('name');
    location.href='../index.html'
}


let password = document.getElementById("pass");
document.getElementById("eye").addEventListener('click', function(){
    if(password.type === "password"){
        password.type ="text";
    }
    else{
        password.type ="password";
    }
})

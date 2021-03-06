/* 
    profile 1:
        username: johndoe123
        password: password1
    profile 2:
        username: billyjohnson
        password: password2
*/
var users = {
    "johndoe123": "password1",
    "billyjohnson": "password2"
};

function login(){
    // what the user inputted is in these variables
    var username = document.querySelector("#username").querySelector("input").value;
    var password = document.querySelector("#password").querySelector("input").value;
    if (username in users){
        if (password === users[username]){
            if (username === "johndoe123"){
                openfile("message_inbox.html");
                console.log("logged in");
            }
            else{
                openfile("./message_inbox.html");
                console.log("logged in");
            }
        }
        else{
            alert("password incorrect");
        }
    }
    else{
        console.log('not logged in');
        alert("username incorrect");
    }

}

function openfile(file) { window.location = file; }

var password = document.getElementById("password");

password.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});
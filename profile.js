function openfile(file) { window.location = file; }

const toMessages = () => {
    openfile("./message_inbox.html");
}


document.getElementById("edit").addEventListener("click", function () {
    var sections = document.getElementsByClassName("u");

    for (var i = 0; i < sections.length; i++){
        sections[i].classList.toggle("test");
        sections[i].toggleAttribute("disabled");
    }

    var button = document.getElementById("edit");
    if (button.innerText === "SAVE PROFILE"){
        button.innerText = "EDIT PROFILE";
    }
    else{
        button.innerText = "SAVE PROFILE";
    }
});
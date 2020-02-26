function openfile(file) { window.location = file; }

const toProfile = () => {
    openfile("./profile2.html");
}

const sendMessage = () => {
    document.querySelector("#testSend").style.visibility = "visible";
    document.querySelector(".recordButton").innerText = "Record Message";
}

const recording = () => {
    document.querySelector('.recordButton').innerText = "recording";
}

function startup() {
    const micButton = document.getElementById('audio')
    micButton.addEventListener('touchstart', handleStart, false)
    micButton.addEventListener('touchend', handleEnd, false)
    const noButton = document.getElementById('no')
    noButton.addEventListener('click', handleNoClick, false)
    const yesButton = document.getElementById('yes')
    yesButton.addEventListener('click', handleYesClick, false)
}

document.addEventListener('DOMContentLoaded', startup)

let messageRecorded = false

function handleYesClick(evt) {
    const icon = document.getElementById('audio-icon')
    icon.innerHTML = 'mic'
    messageRecorded = false
    const hintText = document.getElementById('hint-text')
    hintText.innerHTML = 'Hold to Record'
    const yesButton = document.getElementById('yes')
    yesButton.style.display = 'none'
    const noButton = document.getElementById('no')
    noButton.style.display = 'none'
    const msg = document.getElementById('m4')
    msg.style.visibility = 'visible'
    const msgLabel = document.getElementById('m4-label')
    msgLabel.style.visibility = 'visible'
}

function handleNoClick(evt) {
    const icon = document.getElementById('audio-icon')
    icon.innerHTML = 'mic'
    messageRecorded = false
    const hintText = document.getElementById('hint-text')
    hintText.innerHTML = 'Hold to Record'
    const yesButton = document.getElementById('yes')
    yesButton.style.display = 'none'
    const noButton = document.getElementById('no')
    noButton.style.display = 'none'

}

function handleStart(evt) {
    evt.preventDefault()
    if (messageRecorded) {
        const micButton = document.getElementById('audio')
        micButton.classList.add('pulse')
        const hintText = document.getElementById('hint-text')
        hintText.innerHTML = 'Playing...'
        // TODO disable the buttons and show the audio playing?
    } else {
        const micButton = document.getElementById('audio')
        micButton.classList.add('pulse')
        const hintText = document.getElementById('hint-text')
        hintText.innerHTML = 'Recording...'
    }
}

function handleEnd(evt) {
    evt.preventDefault()
    if (messageRecorded) {
        console.log('play back a message')
    } else {
        const micButton = document.getElementById('audio')
        micButton.classList.remove('pulse')
        const icon = document.getElementById('audio-icon')
        icon.innerHTML = 'play_arrow'
        const hintText = document.getElementById('hint-text')
        hintText.innerHTML = 'Preview'
        const yesButton = document.getElementById('yes')
        yesButton.style.display = 'inline'
        const noButton = document.getElementById('no')
        noButton.style.display = 'inline'
        messageRecorded = true
    }
}

// function openfile(file) { window.location = file }

// const toProfile = () => {
//     openfile('./profile2.html')
// }

// const sendMessage = () => {
//     document.querySelector('#testSend').style.visibility = 'visible'
//     document.querySelector('.recordButton').innerText = 'Record Message'
// }

// const recording = () => {
//     document.querySelector('.recordButton').innerText = 'recording'
// }

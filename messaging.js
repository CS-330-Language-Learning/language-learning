function startup() {
    const micButton = document.getElementById('audio')
    micButton.addEventListener('touchstart', handleStart, false)
    micButton.addEventListener('touchend', handleEnd, false)
    const noButton = document.getElementById('no')
    noButton.addEventListener('click', handleNoClick, false)
    const yesButton = document.getElementById('yes')
    yesButton.addEventListener('click', handleYesClick, false)
    const backButton = document.getElementById('back')
    backButton.addEventListener('click', goToProfile, false)
}

document.addEventListener('DOMContentLoaded', startup)

let messageRecorded = false

function goToProfile() {
    window.location = "./profile2.html";
}

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
    messageRecorded = false
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
    messageRecorded = false

}

function handleStart(evt) {
    evt.preventDefault()
    if (messageRecorded) {
        const micButton = document.getElementById('audio')
        micButton.classList.add('pulse')
        const hintText = document.getElementById('hint-text')
        hintText.innerHTML = 'Playing...'
    } else {
        const micButton = document.getElementById('audio')
        micButton.classList.add('pulse')
        const hintText = document.getElementById('hint-text')
        hintText.innerHTML = 'Recording...'
    }
}

function handleEnd(evt) {
    evt.preventDefault()
    const micButton = document.getElementById('audio')
    const hintText = document.getElementById('hint-text')
    if (messageRecorded) {
        micButton.classList.add('disabled')
        setTimeout(function() {
            micButton.classList.remove('pulse')
            micButton.classList.remove('disabled')
            hintText.innerHTML = 'Preview'
        }, 1000)
    } else {
        micButton.classList.remove('pulse')
        const icon = document.getElementById('audio-icon')
        icon.innerHTML = 'play_arrow'
        hintText.innerHTML = 'Preview'
        const yesButton = document.getElementById('yes')
        yesButton.style.display = 'inline'
        const noButton = document.getElementById('no')
        noButton.style.display = 'inline'
        messageRecorded = true
    }
}
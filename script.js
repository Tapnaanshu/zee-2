// script.js

function revealReason(element) {
    const reason = element.querySelector('.reason');
    if (reason.classList.contains('hidden')) {
        reason.classList.remove('hidden');
    } else {
        reason.classList.add('hidden');
    }
}

function openMe() {
    // Show the message box
    const messageBox = document.getElementById('messageBox');
    messageBox.classList.remove('hidden');
}

function closeMessage() {
    // Close the message box
    const messageBox = document.getElementById('messageBox');
    messageBox.classList.add('hidden');
}

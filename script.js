// Correct password
const correctPassword = "gns@54123";

// Function to check password
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (passwordInput === correctPassword) {
        // Show the content if password is correct
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("password-container").style.display = "none";
    } else {
        // Show an error message if password is incorrect
        errorMessage.style.display = "block";
    }
}

// Function to change message when button is clicked
function changeMessage() {
    const name = document.getElementById("gns");
    name.textContent = "GANESH";

    const newYearMessage = document.getElementById("new-year-message");
    newYearMessage.textContent = "✨ Wishing You a Bright and Successful 2025! ✨";
    newYearMessage.style.animation = "fadeIn 0.2s ease-out"; // Add animation effect

    const message = document.querySelector(".message");
    message.textContent = "May this year bring happiness, health, and prosperity to you and your loved ones!";
    
    const thank = document.getElementById("thanks");
    thank.textContent = "Thank god for giving me friends like you.";
    

    // Remove the "Click for Surprise" button after clicking
    const button = document.querySelector("button");
    button.remove(); // This will remove the button from the DOM
}

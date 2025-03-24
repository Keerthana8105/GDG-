document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email && password) {
        message.style.color = "green";
        message.textContent = "Login Successful!";
        setTimeout(() => {
            window.location.href = "bloodhome.html"; // Redirect to dashboard
        }, 150);
    } else {
        message.style.color = "blue";  // Error message in blue
        message.textContent = "Invalid email or password! Please try again.";
    }
});
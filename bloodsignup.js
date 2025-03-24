document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (name && email && phone && bloodGroup && password) {
        message.style.color = "green";
        message.textContent = "Signup successful! Thank you for registering.";
    } else {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
    }
});
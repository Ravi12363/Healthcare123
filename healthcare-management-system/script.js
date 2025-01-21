// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Validate email
    if (!validateEmail(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
    }

    // Validate password
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters long.";
    }

    if (!emailError.innerHTML && !passwordError.innerHTML) {
        alert("Login successful!");
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

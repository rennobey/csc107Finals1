function register() {
    // Get the new username and password from the registration form
    var newUsername = document.getElementById('registerForm').elements.namedItem('newUname').value;
    var newPassword = document.getElementById('registerForm').elements.namedItem('newPsw').value;

    // Check if the username or password is empty
    if (!newUsername || !newPassword) {
        alert('Please enter both a username and password.');
        return;
    }

    // Check if the username is already taken (replace this with your actual registration logic)
    var isUsernameTaken = checkUsernameAvailability(newUsername);
    if (isUsernameTaken) {
        alert('Username is already taken. Please choose a different username.');
        return;
    }

    // For simplicity, you can store new user data in an array
    var newUser = { username: newUsername, password: newPassword };

    // Here, you can add logic to store the new user data, such as in a database or local storage
    // For now, let's just log the new user data to the console
    console.log('New User Registered:', newUser);

    // Optionally, you can redirect the user to the login page after registration
    window.location.href = 'index.html';
}

function checkUsernameAvailability(username) {
    // Replace this function with your actual logic to check if the username is already taken
    // For now, let's assume the username is available
    return false;
}

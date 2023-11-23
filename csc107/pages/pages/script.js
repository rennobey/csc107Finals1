function login() {
    var users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        { username: 'Ren', password: 'ren12345' },
        // Add more user data as needed
    ];

    var username = document.getElementById('loginForm').elements.namedItem('uname').value;
    var password = document.getElementById('loginForm').elements.namedItem('psw').value;

    console.log('Entered Username:', username);
    console.log('Entered Password:', password);

    var isAuthenticated = users.some(function (user) {
        return user.username === username && user.password === password;
    });

    console.log('Is Authenticated:', isAuthenticated);

    if (isAuthenticated) {
        // Use SweetAlert2 for a custom modal with centering
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            confirmButtonText: 'OK',
        }).then(() => {
            console.log('Redirecting to homepage...');
            window.location.href = 'home.html'; // Redirect to the homepage
        });
    } else {
        // Use SweetAlert2 for a custom modal with centering
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Please check your username and password.',
            confirmButtonText: 'OK',
        });
    }
}

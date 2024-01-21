
//register page direction

document.addEventListener("DOMContentLoaded", function () {
    // Access the button with the id 'registerButton'
    var registerButton = document.getElementById('registerButton');

    // Check if the button is found
    if (registerButton) {
        // Attach the click event listener to the button
        registerButton.addEventListener('click', function () {
            // When the button is clicked, execute the redirectToRegister function
            redirectToRegister();
        });
    } else {
        console.error("Button with id 'registerButton' not found.");
    }

    // Function to redirect to 'register.html'
    function redirectToRegister() {
        // Redirect to register.html
        window.location.href = 'register.html';
    }
});




//login page direction

document.addEventListener("DOMContentLoaded", function () {
    // Access the button with the id 'loginButton'
    var loginButton = document.getElementById('loginButton');

    // Check if the button is found
    if (loginButton) {
        // Attach the click event listener to the button
        loginButton.addEventListener('click', function () {
            // When the button is clicked, execute the redirectToLogin function
            redirectToLogin();
        });
    } else {
        console.error("Button with id 'loginButton' not found.");
    }

    // Function to redirect to 'login.html'
    function redirectToLogin() {
        // Redirect to login.html
        window.location.href = 'login.html';
    }
});

//getStartedButton direction

document.addEventListener("DOMContentLoaded", function () {
    // Access the button with the id 'getStartedButton'
    var getStartedButton = document.getElementById('getStartedButton');

    // Check if the button is found
    if (getStartedButton) {
        // Attach the click event listener to the button
        getStartedButton.addEventListener('click', function () {
            // When the button is clicked, execute the redirectToRegister function
            redirectToRegister();
        });
    } else {
        console.error("Button with id 'getStartedButton' not found.");
    }

    // Function to redirect to 'register.html'
    function redirectToRegister() {
        // Redirect to register.html
        window.location.href = 'register.html';
    }
});




//startDietButton direction
document.addEventListener("DOMContentLoaded", function () {
    // Access the button with the id 'startDietButton'
    var startDietButton = document.getElementById('startDietButton');

    // Check if the button is found
    if (startDietButton) {
        // Attach the click event listener to the button
        startDietButton.addEventListener('click', function () {
            // When the button is clicked, execute the redirectToRegister function
            redirectToRegister();
        });
    } else {
        console.error("Button with id 'startDietButton' not found.");
    }

    // Function to redirect to 'register.html'
    function redirectToRegister() {
        // Redirect to register.html
        window.location.href = 'register.html';
    }
});



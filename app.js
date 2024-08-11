document.addEventListener('DOMContentLoaded', (event) => {
  // Store registered user information
  const users = [];

  // Define functions
  window.login = function() {
      const loginForm = document.getElementById('login');
      const registerForm = document.getElementById('register');
      const loginButton = document.getElementById('loginbtn');
      const registerButton = document.getElementById('registerbtn');
      
      // Clear registration form fields
      clearFormFields(registerForm);
      clearErrorMessage();
      
      loginForm.style.left = "4px";
      registerForm.style.left = "-520px";
      loginButton.className += " my-btn";
      registerButton.className = "btn";
      loginForm.style.opacity = 1;
      registerForm.style.opacity = 0;
  };

  window.register = function() {
      const loginForm = document.getElementById('login');
      const registerForm = document.getElementById('register');
      const loginButton = document.getElementById('loginbtn');
      const registerButton = document.getElementById('registerbtn');

      // Clear login form fields
      clearFormFields(loginForm);
      clearErrorMessage();
      
      loginForm.style.left = "-510px";
      registerForm.style.left = "5px";
      loginButton.className = "btn";
      registerButton.className += " my-btn";
      loginForm.style.opacity = 0;
      registerForm.style.opacity = 1;
  };

  // Handle login form submission
  document.getElementById('login').querySelector('.submit').addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default form submission
      const usernameOrEmail = document.getElementById('userOrEmail').value;
      const password = document.getElementById('password').value;

      // Check if credentials are valid
      const user = users.find(user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password);

      if (user) {
          console.log(`Login successful with Username/Email: ${usernameOrEmail}`);
      } else {
          console.log('Invalid Username/Email or Password');
      }
  });

  // Handle registration form submission
  document.getElementById('register').querySelector('.submit').addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default form submission
      const firstName = document.getElementById('fName').value;
      const lastName = document.getElementById('lName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('pass').value;

      // Check if the email already exists
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
          document.getElementById('email-error').style.display = 'block';
      } else if (firstName && lastName && email && password) {
          // Add new user to the users array
          users.push({
              username: `${firstName} ${lastName}`,
              email: email,
              password: password
          });
          console.log(`Registration successful with Name: ${firstName} ${lastName}, Email: ${email}`);
          
          // Clear registration form fields after successful registration
          clearFormFields(document.getElementById('register'));
          clearErrorMessage();
      } else {
          console.log('Please fill in all fields.');
      }
  });

  // Function to clear form fields
  function clearFormFields(form) {
      const inputs = form.querySelectorAll('.input-field');
      inputs.forEach(input => {
          input.value = '';
      });
  }

  // Function to clear the error message
  function clearErrorMessage() {
      document.getElementById('email-error').style.display = 'none';
  }

  // Optional: Function to handle menu button (if needed)
  window.myMenuFunction = function() {
      console.log('Menu button clicked');
  };
});

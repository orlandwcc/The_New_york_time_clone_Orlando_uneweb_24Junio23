window.addEventListener("load", function() {
    showPassword = document.querySelector('.show-password');
    showPassword.addEventListener('click', () => {
 
      password = document.querySelector('.password');
 
      if ( password.type === "text" ) {
        password.type = "password"
        showPassword.classList.remove('fa-eye-slash');
      } else {
        password.type = "text"
        showPassword.classList.toggle("fa-eye-slash");
      }
  })
});

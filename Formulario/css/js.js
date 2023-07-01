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

var required = document.getElementById('required');
required.addEventListener('required', function(evt) {
  this.setCustomValidity('');
});
required.addEventListener('invalid', function(evt) {
  if (this.validity.valueMissing) {
    this.setCustomValidity('Por favor complete este campo');
  }
});
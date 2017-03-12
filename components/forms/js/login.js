(function (window) {
    var login = document.querySelector('#login'),
        formMarkedInvalid = false,
        emailValid = false,
        emailMarkedInvalid = false,
        passwordValid = false,
        passwordMarkedInvalid = false,
        emailEl = login.querySelector('[name="email"]'),
        emailRemeberMeValue = localStorage.getItem("email") !== null ? localStorage.getItem("email") : false;

    if(emailRemeberMeValue) {
        emailEl.value = emailRemeberMeValue;
    }

    // login form
    if(login !== null) {
        login.addEventListener('submit', function(e){

            var formEl = e.target,
                emailErrorEL = formEl.querySelector('.error-msg.email-error'),
                emailValue = localStorage.getItem("email") !== null ? localStorage.getItem("email") : emailEl.value,
                emailValid = validator.isEmailAddress(emailValue) !== true ? validator.isEmailAddress(emailValue) : {valid: true},
                passwordEl = formEl.querySelector('[name="password"]'),
                passwordErrorEL = formEl.querySelector('.error-msg.password-error'),
                passwordValue = passwordEl.value,
                passwordValid = validator.isOfLength(passwordValue, 8) !== true ? validator.isOfLength(passwordValue, 8) : {valid: true},
                remeberMeEl = formEl.querySelector('[name="remeberMe"');

            if(!emailValid.valid || !passwordValid.valid) {
                //form is not valid. stop form from submitting
                e.preventDefault();

                if(!formMarkedInvalid) {
                    login.classList += " not-valid";
                    formMarkedInvalid = true;
                }
            }
            // Email Field Validation
            if(!emailMarkedInvalid && !emailValid.valid) {
                if(emailEl.classList.contains("valid")) {
                    emailEl.classList.remove("valid");
                }
                emailErrorEL.innerHTML += emailValid.msg;
                emailEl.classList += "not-valid";
                emailMarkedInvalid = true;
            }
            if(emailValid.valid) {
                if(emailEl.classList.contains("not-valid")) {
                    emailEl.classList.remove("not-valid");
                    emailErrorEL.innerHTML = "";
                }
                if(!emailEl.classList.contains("valid")) {
                    emailEl.classList += "valid";
                    emailMarkedEmpty = false;
                }
            }

            // Password Field Validation
            if(!passwordMarkedInvalid && !passwordValid.valid) {
                if(passwordEl.classList.contains("valid")) {
                    passwordEl.classList.remove("valid");
                }
                passwordErrorEL.innerHTML += "Password " + passwordValid.msg;
                passwordEl.classList += "not-valid";
                passwordMarkedInvalid = true;
            }
            if(passwordValid.valid) {
                if(passwordEl.classList.contains("not-valid")) {
                    passwordEl.classList.remove("not-valid");
                    passwordErrorEL.innerHTML = "";
                }
                if(!passwordEl.classList.contains("valid")) {
                    passwordEl.classList += "valid";
                    passwordMarkedEmpty = false;
                }
            }

            // remember me
            if(remeberMeEl.checked) {
                localStorage.setItem("email", emailValue);
            }

        });
    }
})(window);
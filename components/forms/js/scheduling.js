(function (window) {
    var scheduling = document.querySelector('#scheduling'),
        formMarkedInvalid = false;

    // scheduling form
    if(scheduling !== null) {
        scheduling.addEventListener('submit', function(e){

            if(!isValid) {
                //form is not valid. stop form from submitting
                e.preventDefault();

                if(!formMarkedInvalid) {
                    scheduling.classList += " not-valid";
                    formMarkedInvalid = true;
                }
            }

        });
    }
})(window);
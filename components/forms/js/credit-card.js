(function (window) {
    var creditCard = document.querySelector('#creditCard'),
        formMarkedInvalid = false;

    // creditCard form
    if(creditCard !== null) {
        creditCard.addEventListener('submit', function(e){

            if(!isValid) {
                //form is not valid. stop form from submitting
                e.preventDefault();

                if(!formMarkedInvalid) {
                    creditCard.classList += " not-valid";
                    formMarkedInvalid = true;
                }
            }

        });
    }
})(window);
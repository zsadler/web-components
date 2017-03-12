(function (window) {
    var shippingBilling = document.querySelector('#shippingBilling'),
        formMarkedInvalid = false;

    // shippingBilling form
    if(shippingBilling !== null) {
        shippingBilling.addEventListener('submit', function(e){

            if(!isValid) {
                //form is not valid. stop form from submitting
                e.preventDefault();

                if(!formMarkedInvalid) {
                    shippingBilling.classList += " not-valid";
                    formMarkedInvalid = true;
                }
            }

        });
    }
})(window);
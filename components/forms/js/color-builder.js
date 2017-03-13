(function (window) {
    // Set all the on page laod defaults
    var colorBuilder = document.querySelector('#colorBuilder'),
        rgbaGeneratedEl = document.querySelector('#color-generated'),
        rRangeEl = document.querySelector('#rbg-r'),
        gRangeEl = document.querySelector('#rbg-g'),
        bRangeEl = document.querySelector('#rbg-b'),
        aRangeEl = document.querySelector('#rgb-alpha'),
        rValueEl = document.querySelector('.rbg-r span'),
        gValueEl = document.querySelector('.rbg-g span'),
        bValueEl = document.querySelector('.rbg-b span'),
        aValueEl = document.querySelector('.rgb-alpha span'),
        rgbaValueEl = document.querySelector('.rgb-result span'),
        rRange = rRangeEl.value,
        gRange = gRangeEl.value,
        bRange = bRangeEl.value,
        aRange = aRangeEl.value,
        rgbaGenerated = 'background-Color:rgba('+ rRange +','+ gRange +','+ bRange +','+ aRange +')';

    // set generated colors default values
    rgbaGeneratedEl.setAttribute("style", rgbaGenerated);
    
    // set labels default numeric values
    rValueEl.innerHTML = rRange;
    gValueEl.innerHTML = gRange;
    bValueEl.innerHTML = bRange;
    aValueEl.innerHTML = aRange;

    rgbaValueEl.innerHTML = 'rgba('+ rRange +', '+ gRange +', '+ bRange +', '+ aRange;

    // colorBuilder form
    if(colorBuilder !== null) {
        colorBuilder.addEventListener('change', function(e){
            // get range values
            rRange = rRangeEl.value;
            gRange = gRangeEl.value;
            bRange = bRangeEl.value;
            aRange = aRangeEl.value;

            // set labels numeric value
            rValueEl.innerHTML = rRange;
            gValueEl.innerHTML = gRange;
            bValueEl.innerHTML = bRange;
            aValueEl.innerHTML = aRange;    

            // set value on range change
            rgbaValueEl.innerHTML = 'rgba('+ rRange +', '+ gRange +', '+ bRange +', '+ aRange +')';
            rgbaGenerated = 'background-Color:rgba('+ rRange +','+ gRange +','+ bRange +','+ aRange +')';
            rgbaGeneratedEl.setAttribute("style", rgbaGenerated);
        });
    }
})(window);
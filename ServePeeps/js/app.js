$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
function showPaymentForm() {
    x = document.getElementById("payment_form");

    if ((document.getElementById("monthly").checked = true) == true) {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
//tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
/*------------Switch On,Off-------------*/
$(document).ready(function(){  
    $('.switch').click(function(){  
         $(this).toggleClass("switchOn");  
    });  
});  
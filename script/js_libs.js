function pageload() {
    // jQuery include
    str = "<script type=\"text/javascript\" src=\'https://code.jquery.com/jquery-3.6.0.min.js\'></script>";
    document.getElementById("txt_jquery").textContent = str;
    // mathjax include & code
    str = "<script type=\"text/javascript\" src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML\' async></script>";
    document.getElementById("txt_mathjax").textContent = str;
    str = "$$\\int_a^b x^2 = \\frac{1}{3}x^3 |_a^b$$";
    document.getElementById("txt_mjax_ex").textContent = str;
}

// jQuery example code
$(document).ready(function () {
    $("#tgt_jquery_ex")
    .text("Blue text inserted by jQuery")
    .addClass("blue_text");
});
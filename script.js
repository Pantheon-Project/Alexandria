function pageload() {
    let str = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./style.css\">";
    document.getElementById("txt_css").innerHTML = escapeHTML(str);

    str = "<script type=\"text/javascript\" src=\"./script.js\">";
    document.getElementById("txt_js").innerHTML = escapeHTML(str);

    str = "<script type=\"text/javascript\" src='https://code.jquery.com/jquery-3.6.0.min.js'>";
    document.getElementById("txt_js_extern").innerHTML = escapeHTML(str);

    str = "<script type=\"text/javascript\" src=\'https://code.jquery.com/jquery-3.6.0.min.js\'>";
    document.getElementById("txt_jquery").innerHTML = escapeHTML(str);

    str = "<script type=\"text/javascript\" src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML\' async>";
    document.getElementById("txt_mathjax").innerHTML = escapeHTML(str);
    str = "$$\\int_a^b x^2 = \\frac{1}{3}x^3 |_a^b$$";
    document.getElementById("txt_mjax_ex").innerHTML = escapeHTML(str);

    str = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">`;
    document.getElementById("txt_bootstrap_css").innerHTML = escapeHTML(str);
    str = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>`;
    document.getElementById("txt_bootstrap_js").innerHTML = escapeHTML(str);
    str = `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" crossorigin="anonymous"></script>`;
    document.getElementById("txt_bootstrap_popper").innerHTML = escapeHTML(str);

    str = `<p class="text-primary">Text made blue by Bootstrap</p>`;
    document.getElementById("txt_bootstrap_ex").innerHTML = escapeHTML(str);
}

function escapeHTML(html_string) {
    return html_string.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;").replace("'", "&apos;");
}

// jQuery example code
$(document).ready(function () {
    $("#tgt_jquery_ex")
    .text("Blue text inserted by jQuery")
    .addClass("blue_text");
});
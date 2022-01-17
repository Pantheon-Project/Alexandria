function pageload() {
    // general css include
    let str = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./style.css\">";
    document.getElementById("txt_css").textContent = str;
    // general js include
    str = "<script type=\"text/javascript\" src=\"./script.js\"></script>";
    document.getElementById("txt_js").textContent = str;
    // external js include
    str = "<script type=\"text/javascript\" src='https://code.jquery.com/jquery-3.6.0.min.js'></script>";
    document.getElementById("txt_js_extern").textContent = str;

}
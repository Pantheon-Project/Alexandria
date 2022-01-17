import { escapeHTML } from "./util.js";

function pageload() {
    // FontAwesome include
    str = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" crossorigin="anonymous">`;
    document.getElementById("txt_fontawesome").innerHTML = escapeHTML(str);
    // FontAwesome code
    str = `<i class="fas fa-circle"></i>`;
    document.getElementById("txt_fontawesome_ex").innerHTML = escapeHTML(str);
    feather.replace()
    // Feather include
    str = `<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" crossorigin="anonymous"></script>`;
    document.getElementById("txt_feather").innerHTML = escapeHTML(str);
    // Feather code
    str = `<i data-feather="circle"></i>\n<script>feather.replace()<script>`;
    document.getElementById("txt_feather_ex").innerHTML = escapeHTML(str);
    feather.replace()
}